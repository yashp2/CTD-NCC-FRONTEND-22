import "./Submissions.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AceEditor from "react-ace";
import { useEffect, useState } from "react";

function Submissions() {
  const [showmodal, Switchmodal] = useState(false);
  const [modal_body, change_content] = useState("");
  let [s_data, UpdateSubs] = useState([]);
  const [loading, setLoading] = useState(0);
  const [cmode,ChangeMode]=useState("c_cpp");
  var axios = require('axios');
  let token = localStorage.getItem('token');
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      // console.log(localStorage.getItem('token'));
      var config = {
        method: 'get',
        url: 'http://127.0.0.1:8000/NCC/submission',
        headers: {
          'Authorization': `${token}`
        }
      };

      const subs = await axios(config)

      console.log('Subs',JSON.stringify(subs.data))

      UpdateSubs(subs.data);
      setLoading(false);

    }
    loadData();
  }, [token]);

  if (loading) {
    return (
      <>Loadingg....</>
    )
  }
  let ind = 0;
  function handleclick(x) {
    x -= 1;
    let z = s_data[x].code;
    // console.log(z);

    Switchmodal(true);
    change_content(z);

  }
  console.log(s_data);
  console.log("SUBS TYPE",typeof(s_data));
  return (
    <div className="submissions_pg d-flex flex-column justify-content-start align-items-center">
      <Card className="submission_top_c text-white m-3 mt-4">
        <p className="d-flex flex-row justify-content-around align-items-center submission_top m-1 p-1 text-white">
          <div className="p-0 m-0" >
            <h5 className="p-0 m-0" >
              <a href="http://youtube.com" className="text-white">1</a>
            </h5>
          </div>
          <div className="p-0 m-0">
            <h5 className="p-0 m-0">
              <a href="http://youtube.com" className="text-white">2</a>
            </h5>
          </div >
          <div className="p-0 m-0">
            <h5 className="p-0 m-0">
              <a href="http://youtube.com" className="text-white">3</a>
            </h5>
          </div >
          <div className="p-0 m-0">
            <h5 className="p-0 m-0">
              <a href="http://youtube.com" className="text-white">4</a>
            </h5>
          </div>
          <div className="p-0 m-0">
            <h5 className="p-0 m-0">
              <a href="http://youtube.com" className="text-white">5</a>
            </h5>
          </div>
          <div className="p-0 m-0">
            <h5 className="p-0 m-0">
              <a href="http://youtube.com" className="text-white">6</a>
            </h5>
          </div>
        </p>
      </Card>
      {/* <Button onClick={()=>{Switchmodal(true)}}>hello</Button> */}
      <Card className="submissions-m-div m-3 bg-transparent text-white">
        <Card className="d-flex flex-row justify-content-around align-items-center bg-transparent br-2 m-2 p-1">
          <div><h4>Sr No.</h4></div>
          <div><h4>Time</h4></div>
          <div><h4>Score</h4></div>
          <div><h4>View</h4></div>
        </Card>
        <Card className="bg-transparent submissions-m-div-bottom">
          {s_data.map((obj) => {
            var sr_no = obj.sr;
            // console.log(sr_no);

            return (
              <Card className="d-flex flex-row justify-content-around align-items-center bg-transparent br-1 m-1 p-1">
                <div id={`sr_${obj.id}`}><h4>{obj.id}</h4></div>
                <div><h4>{obj.time}</h4></div>
                <div><h4>{obj.status}</h4></div>
                <div><h4><Button onClick={() => {
                  Switchmodal(true);
                  change_content(obj.code);
                  if(obj.language === "c++")ChangeMode("c_cpp");
                  else if(obj.language === "python")ChangeMode("python");
                  else if(obj.language === "java")ChangeMode("java");
                  else ChangeMode("c_cpp");
                }}>View</Button></h4></div>

              </Card>
            )
          })}
        </Card>
      </Card>
      <Modal
        size="lg"
        show={showmodal}
        onHide={() => Switchmodal(false)}
        aria-labelledby="example-modal-sizes-title-lg"

      >
        <Modal.Header closeButton className="bg-custom text-white ">
          <Modal.Title id="example-modal-sizes-title-lg" className="text-center">
            View Submission
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal_body" className="bg-custom">
          {/* <h5 id="modal_body_h">{modal_body}</h5> */}
          <div className="s_pg_ace_e ">
            <AceEditor
              mode={cmode}
              theme="monokai"
              name="UNIQUE_ID_OF_DIV"
              style={{ height: "100%", width: "100%" }}
              value={modal_body}
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                tabSize: 1,
                showPrintMargin: false, // boolean: true if show the vertical print margin
                showGutter: true, // boolean: true if show line gutter
                wrap: true,
                readOnly: true
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-custom">
          <Button variant="secondary" onClick={() => { navigator.clipboard.writeText(modal_body); }}>
            Copy Code
          </Button>
          <Button variant="primary" onClick={() => Switchmodal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default Submissions;
