import "./Testcases.css";
import Card from "react-bootstrap/Card";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import tick from "./checked.png";
import cross from "./cross.png";
const testcases_data = [
  {
    no: 1,
    status: "Ac",
    accepted: true,
  },
  {
    no: 2,
    status: "Tle",
    accepted: false,
  },
  {
    no: 3,
    status: "Ac",
    accepted: true,
  },
  {
    no: 4,
    status: "Ac",
    accepted: true,
  },
  {
    no: 5,
    status: "Wa",
    accepted: false,
  },
  {
    no: 6,
    status: "Wa",
    accepted: false,
  },
  
];

function Testcases() {
  // const[console_content , Update_console_content]=useState("Line 4: Char 6: error: use of undeclared identifier 'asda'\nasda\n     ^\n1 error generated.")
  const [console_content, Update_console_content] = useState(
    "Line 4: Char 6: error: use of undeclared identifier 'asda'\nasda\n     ^\n1 error generated."
  );

  return (
    <div className="test-cases-pg d-flex justify-content-center align-items-center">
      <Card className="t-pg-console bg-transparent m-3 text-white p-4">
        <h4>Score : 45</h4>
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
}

export default Testcases;
