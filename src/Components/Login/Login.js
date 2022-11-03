import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Login.css";
// import Image from "react-bootstrap/Image";
import Img1 from "./login_img_1.png";
import Img2 from "./user.png";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
var axios = require('axios');
function Login() {
  localStorage.clear();
  localStorage.setItem(`c++1`, "#include<iostream>\nusing namespace std;\n\nint main(){\n//your code here\nreturn 0;\n}");
  localStorage.setItem(`c1`, "//your code here");
  localStorage.setItem(`c2`, "//your code here");
  localStorage.setItem(`c3`, "//your code here");
  localStorage.setItem(`c4`, "//your code here");
  localStorage.setItem(`c5`, "//your code here");
  localStorage.setItem(`c6`, "//your code here");
  localStorage.setItem(`java1`, "//your code here");
  localStorage.setItem(`python1`, "#your code here");
  localStorage.setItem(`c++2`, "#include<iostream>\nusing namespace std;\n\nint main(){\n//your code here\nreturn 0;\n}");
  localStorage.setItem(`java2`, "//your code here");
  localStorage.setItem(`python2`, "#your code here");
  localStorage.setItem(`c++3`, "#include<iostream>\nusing namespace std;\n\nint main(){\n//your code here\nreturn 0;\n}");
  localStorage.setItem(`java3`, "//your code here");
  localStorage.setItem(`python3`, "#your code here");
  localStorage.setItem(`c++4`, "#include<iostream>\nusing namespace std;\n\nint main(){\n//your code here\nreturn 0;\n}");
  localStorage.setItem(`java4`, "//your code here");
  localStorage.setItem(`python4`, "#your code here");
  localStorage.setItem(`c++5`, "#include<iostream>\nusing namespace std;\n\nint main(){\n//your code here\nreturn 0;\n}");
  localStorage.setItem(`java5`, "//your code here");
  localStorage.setItem(`python5`, "#your code here");
  localStorage.setItem(`c++6`, "#include<iostream>\nusing namespace std;\n\nint main(){\n//your code here\nreturn 0;\n}");
  localStorage.setItem(`java6`, "//your code here");
  localStorage.setItem(`python6`, "#your code here");
  localStorage.setItem("isloggedin",false);
  let [name,changename]=useState("");
  let [pass,changepass]=useState("");
  const navigate=useNavigate();
  let data1;
  const loadData = async () => {
    var config = {
      method: 'post',
      data:{username:name,password:pass},
      url: 'http://127.0.0.1:8000/auth/token/login',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const Login = await axios(config).then(function (response) {
      console.log(JSON.stringify(response));
      data1=JSON.stringify(response);
      let data2=JSON.parse(data1);
      console.log(data2.data.auth_token);
      document.getElementById('errormsg').classList.remove('show');
      localStorage.setItem('token', `token ${data2.data.auth_token}`);
      localStorage.setItem("isloggedin",true);
      navigate("/instructions");
      // console.log(data1.data);
    })
      .catch(function (error) {
        console.log(error.code);
        document.getElementById('errormsg').textContent=error.code;
        document.getElementById('errormsg').classList.add('show');
      });
    // console.log('questionsList', questionsList.data)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
  }
  return (
    <div className="login_pg d-flex justify-content-center align-items-center text-center">
      <Card className="login_pg_mdiv d-flex flex-col m-3">
        <div>
          <h1 className="text-white pt-3 fs1 font-weight-bold">Ncc 2.0</h1>
        </div>
        <div className="login_pg_mdiv2 d-flex flex-row p-2 ">
          <div className="login_pg_ldiv">
            <img src={Img1} alt="" srcset="" className="login_pg_ldiv_img" />
            <img src={Img2} alt="" srcset="" className="login_pg_ldiv_img2" />
          </div>
          <div className="login_pg_rdiv p-4 d-flex flex-column">
            <Form>
              <Form.Group className="mb-3 pt-3 pb-2" controlId="formBasicEmail">
                {/* <Form.Label>Login</Form.Label> */}
                <Form.Control type="text" placeholder="Login_id" className="mb-3 mt-1" value={name} onChange={(e)=>changename(e.target.value)}/>
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" className="mb-2 mt-1" value={pass} onChange={(e)=>changepass(e.target.value)}/>
                <h5 id="errormsg" className="hide"></h5>
                <Button variant="primary" className="mb-2 mt-1" onClick={loadData}>
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Login;
