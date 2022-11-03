// import { Button } from 'bootstrap';
import { useState, React } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "./rdiv.css";
// import Code_Editor from '../code_editor/Code_Editor';
import AceEditor from "react-ace";
import run from "./run.png";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import { Navigate, useNavigate } from "react-router";
import { Redirect } from 'react-router';
function Rdiv(props) {
  let [code, ucode] = useState("");
  let [lang, updatelang] = useState("c_cpp");
  let [langs, updatelangs] = useState("c");
  let [theme, utheme] = useState("monokai");

  let [ci,uci]=useState("");
  let [co,uco]=useState("");
  const [lgShow, setLgShow] = useState(false);
  // let cscore = 100;
  let [cdc, ucdc] = useState("black");
  const id = props.id;
  let token = localStorage.getItem('token');
  var axios = require('axios');
  let inputdiv = document.getElementById("cinpp");
  let outputdiv = document.getElementById("coutt");
  const navigate = useNavigate();
  function langc(e) {
    // console.log(lang);/
    updatelang(e.target.value);
    if (e.target.value == "c++") { updatelang("c_cpp"); }
    else if (e.target.value == "c") { updatelang("c_cpp"); }
    else { updatelang(e.target.value) }
    console.log(e.target.value);
    updatelangs(e.target.value);
    // console.log("hell",localStorage.getItem(`${lang}${id}`));
    ucode(localStorage.getItem(`${e.target.value}${id}`));
  }
  function themec(e) {
    utheme(e.target.value);
    if (e.target.value == "monokai" || e.target.value == "twilight") {
      ucdc("black");
    }
    else {
      ucdc("");
    }
    console.log(e.target.value);
    // console.log(theme);
  }

  function editor_c(e) {
    console.log(e);
    ucode(e);
    console.log(code);
    localStorage.setItem(`${langs}${id}`, e);
  }

  function cci(e){
    uci(e.target.value);
    console.log(ci);
  }
  function handlerun() {
    
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    let codecc = localStorage.getItem(`${langs}${id}`);
    data.append('language', langs);
    data.append('code', `${codecc}`);
    data.append('input', ci);
    console.log(langs);
    console.log(ci);
    // console.log(inputdiv.textContent);
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/NCC/custom',
      headers: {
        'Authorization': token,

      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.data);
        console.log(response.data["output"]);
        if (response.data["error"] == "") { console.log("error not found");uco(response.data["output"]);console.log(co); }
        else uco(response.data["error"]);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  function handlesubmit() {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    let codecc = localStorage.getItem(`${langs}${id}`);
    data.append('language', langs);
    data.append('code', `${codecc}`);
    // data.append('input', JSON.stringify(inputdiv.textContent));
    console.log(langs);
    console.log(codecc);
    // console.log(inputdiv.textContent);
    var config = {
      method: 'post',
      url: `http://127.0.0.1:8000/NCC/submit/${id}`,
      headers: {
        'Authorization': token,

      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.data);
        let a = response.data;
        navigate("/testcases", { state: { cases: a.cases, error: a.error } });
        // <Redirect
        //     to={{
        //     pathname: "/testcases",
        //     state: response.data
        //   }}
        // />
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function loadbuffer(){
    console.log("hi");
    var config = {
      method: 'get',
      url: `http://127.0.0.1:8000/NCC/buffer/${id}`,
      headers: {
        'Authorization': `${token}`
      }
    };

    axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      console.log(response.data);
      if(JSON.stringify(response.data)==='Failed')return;
      updatelangs(response.data.language);
      if(response.data.language=="c++" || response.data.language=="c")updatelang("c_cpp");
      else updatelang(response.data.language);

      ucode(response.data.code);
      localStorage.setItem(`${langs}${id}`,response.data.code);
    })
  }
  // function inpc(){
  //   var fr=new FileReader();
  //   fr.onload=function(){
  //     ucode(fr.result);
  //   }
  //   fr.readAsText(this.files[0]);
  // }


const   handleFile = (e) => {
    const content = e.target.result;
    console.log('file content',  content)
    ucode(content);
      localStorage.setItem(`${langs}${id}`,content);
    // You can set content in state and show it in render.
  }

  const  handleChangeFile = (file) => {
      let fileData = new FileReader();
      fileData.onloadend = handleFile;
      fileData.readAsText(file);
    }
    // else {alert("Uploading only .c, .cpp & .py files is allowed.");}
    
    // reader.readAsText(e.target.files[0])
  
  // const handleFileChosen = (file) => {
  //   var extension =file.name.split('.').pop().toLowerCase();
  //   if(extension==="cpp" || extension==="c" || extension==="py" )
  //   {
  //     fileReader = new FileReader();
  //     fileReader.onloadend = handleFileRead;
  //     fileReader.readAsText(file);
  //   }
  //   else {alert("Uploading only .c, .cpp & .py files is allowed.");}

  // };
  return (
    <Card className="rdiv">
      {/* {lang}{theme} */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        // className="b-2"
      >
        <Modal.Header closeButton className="bg-bl b-1 c-w">
          <Modal.Title id="example-modal-sizes-title-lg">
            Custom I/O
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-bl b-1">
          <Card className='ipop bg-t'>
            <Card className="inp bg-t b-1">
              <div className='bg-b c-w'><h5>Input</h5></div>
              <textarea name="" id="cinpp" className='inpt bg-t c-w br-2' onChange={cci} value={ci}></textarea>
            </Card>
            <Card className='out bg-t b-1 '>
              <div className='bg-b c-w'><h5>Output</h5></div>
              <textarea name="" id="coutt" className='outt bg-t c-w br-2' value={co} readOnly></textarea>
            </Card>
          </Card>
        </Modal.Body>
        <Modal.Footer className="bg-bl b-1">
          <Button variant="secondary" onClick={() => { setLgShow(false) }}>
            Close
          </Button>
          <Button variant="primary" onClick={handlerun}>
          <img
            src={run}
            alt=""
            srcset=""
            className="mb-1"
            style={{ height: "15px" }}
          />
            Run
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="rtopnav bg-t c-w">
        <div className="rtn rtn1">
          <select name="lang" id="lang" onChange={langc} className="bg-t c-w br-2 b-1" value={langs}>
            <option value="c" className="bg-bl c-w">C</option>
            <option value="c++" className="bg-bl c-w">C++</option>
            <option value="java" className="bg-bl c-w">Java</option>
            <option value="python" className="bg-bl c-w">Python</option>
          </select>
        </div>
        {/* <div className="rtn rtn2">
          <h5>Your Score :{cscore}</h5>
        </div> */}
        <div className="rtn rtn3">
          <select name="theme" id="theme" onChange={themec} className="bg-t c-w br-2 b-1">
            <option value="monokai" className="bg-bl c-w ">monokai</option>
            <option value="github" className="bg-bl c-w">github</option>
            <option value="tomorrow" className="bg-bl c-w">tomorrow</option>
            <option value="twilight" className="bg-bl c-w">twilight</option>
          </select>
        </div>
      </Card>
      <Card className="ediv">
        <AceEditor
          mode={lang}
          theme={theme}
          value={code}
          name="UNIQUE_ID_OF_DIV"
          style={{ height: "100%", width: "100%", backgroundColor: cdc }}
          resize="True"
          onChange={editor_c}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 1,
            showPrintMargin: false, // boolean: true if show the vertical print margin
            showGutter: true, // boolean: true if show line gutter
            wrap: true,
            renderValidationDecorations: "on",
          }}
        />
      </Card>
      <Card className="rtopnav rbottomnav bg-t rbtnav">
        <div >
          <button className="rbn rbn1 bg-t  b-1 c-w br-2 pd-lr-15" onClick={()=>{uco("");setLgShow(true);}}><img
            src={run}
            alt=""
            srcset=""
            className="mb-1"
            style={{ height: "15px" }}
          />{`  Custom I/O`}</button>
        </div>
        <div >
          <button className="rbn rbn2 bg-t  b-1 c-w br-2 pd-lr-15" onClick={loadbuffer}>Load Buffer</button>
        </div>
        <div >
          <label htmlFor="inpfff" className="rbn rbn3 bg-t  b-1 c-w br-2 pd-lr-15">
            Choose File
          </label>
          <input type="file" name="inpf" id="inpfff" onChange={e => 
            handleChangeFile(e.target.files[0])}/>

        </div>
        <div >
          <input type="submit" value="Submit" className="rbn rbn4 b-b pd-lr-15 bg-t  b-1 c-w br-2" onClick={handlesubmit} />
        </div>
      </Card>
    </Card>
  );
}

export default Rdiv;
