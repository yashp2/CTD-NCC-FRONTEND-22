import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./Login.css";
// import Image from "react-bootstrap/Image";
import Img1 from "./login_img_1.png";
import Img2 from "./user.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
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
                <Form.Control type="text" placeholder="Login_id" className="mb-3 mt-1" />
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" className="mb-2 mt-1" />
                <Button variant="primary" type="submit" className="mb-2 mt-1">
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
