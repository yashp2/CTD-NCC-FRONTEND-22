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
