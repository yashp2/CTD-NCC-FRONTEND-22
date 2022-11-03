import "./Testcases.css";
import Card from "react-bootstrap/Card";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import tick from "./checked.png";
import cross from "./cross.png";
import { Navigate, useNavigate, useParams, useLocation } from "react-router";



const Testcases = () => {
  const [testcases_data, utestdata] = useState([]);
  const [console_content, Update_console_content] = useState(
    "Line 4: Char 6: error: use of undeclared identifier 'asda'\nasda\n     ^\n1 error generated."
  );
  const location = useLocation();
  let a = localStorage.getItem("isloggedin");
  const navigate = useNavigate();
  if (a == "false") navigate("/");
  let token = localStorage.getItem('token');


  // acdata.map((e)=>{
  //   let tcv=false;
  //   if(e=='AC')tcv=true;
  //   temp.push({no:++i,status:{e},accepted:{tcv}})
  // })

  useEffect(() => {
    const loadData = async () => {

      console.log(location.state);
      let acdata = location.state.cases;
      console.log(acdata);
      let temp = [];
      let i = 0;
      acdata.map((e) => {
        let tcv = false;
        if (e == 'AC') tcv = true;
        temp.push({ no: ++i, status:  `${e}` , accepted:  tcv  })
      })
      console.log(temp);
      utestdata(temp);
      Update_console_content(location.state.error);
    }
    loadData();
  }, [token]);


  return (
    <div className="test-cases-pg d-flex justify-content-center align-items-center">
      <Card className="t-pg-console bg-transparent m-3 text-white p-4">
        {/* <h4>Score : 45</h4> */}
        <h4>Console :</h4>
        {console_content}
      </Card>
      <div className="t-pg-tcs">
        <Card className="t-pg-tc d-flex flex-row m-1 p-1 justify-content-around align-items-between text-white br-w">
          <div>
            <h4>No.</h4>
          </div>
          <div >
            <h4>Status</h4>
          </div>
          <div >
            <h4>
              Result
            </h4>
          </div>
        </Card>
        {testcases_data.map((testcase) => {
          return (
            <Card className="t-pg-tc d-flex flex-row m-1 p-1 justify-content-around align-items-between text-white br-w-1">
              <div>
                <h4>{testcase.no}</h4>
              </div>
              <div
                className={testcase.accepted ? "text-success" : "text-danger"}
              >
                <h4>{testcase.status}</h4>
              </div>
              <div
                className={testcase.accepted ? "text-success" : "text-danger"}
              >
                <h4 className="ml-5">
                  {testcase.accepted ? "Passed  " : "Failed  "}
                  <img
                    src={testcase.accepted ? tick : cross}
                    alt=""
                    srcset=""
                    className="pass-fail"
                  />
                </h4>
              </div>
            </Card>
          );
        })}
      </div>

    </div>
  );
};

export default Testcases;
