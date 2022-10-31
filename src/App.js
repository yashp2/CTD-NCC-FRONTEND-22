import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import Login from './Components/Login/Login';
import Instructions from './Components/Instructions/Instructions';
import Questionhub from './Components/Questionhub/Questionhub';
import Coding from './Components/Coding/Coding';
import Result from './Components/Result/Result';
import Testcases from './Components/Testcases/Testcases';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Submissions from './Components/Submissions/Submissions';
import {BrowserRouter as Router,Switch,Route,Link,Routes} from 'react-router-dom';
import heart from "./love.png";
import Notfound from './Components/NotFound/Notfound';
import Navbarr from './Components/Navbarr/Navbarr';




function App() {
  
  return (
    
    <Router>
      
      <Routes>
        
        <Route path="/" element={<Login></Login>} />
        <Route path="/login"  element={<Login />} exact />
        <Route path="/instructions"  element={<Instructions />} exact />
        <Route path="/questionhub"  element={<Questionhub />} exact />
        <Route path="/coding/:id"  element={<Coding />} exact/>
        <Route path="/testcases"  element={<Testcases />} exact />
        <Route path="/submissions"  element={<Submissions />} exact />
        <Route path="/leaderboard"  element={<Leaderboard />} exact />
        <Route path="/result"  element={<Result />} exact />
        <Route path="*"  element={<Notfound />}  />
        
      </Routes>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
      <Container>
        <Navbar.Brand href="#home">Sponsor logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav >
            <Nav.Link href="/instructions" className='text-white' id="nav-ins" >Instructions</Nav.Link>
            <Nav.Link href="/questionhub" className='text-white ' id="nav-qh">QuestionHub</Nav.Link>
            <Nav.Link href="/leaderboard" className='text-white' id="nav-lb">Leaderboard</Nav.Link>
            <Nav.Link href="/submissions" className='text-white ' id="nav-s">Submissions</Nav.Link>
            <Nav.Link href="/result" className='text-white '>Logout</Nav.Link>
          </Nav>
            <Navbar.Brand href="#home" className='mli-2'>IEEE logo</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <Navbarr />
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
      <Container className='d-flex justify-content-center align-items-center '>
        <Navbar.Brand href="#home">Made with <img src={heart} alt="" srcset="" className="hearth" /> by PISB Web Team</Navbar.Brand>
        {/* <Nav.Link href="#features">Features</Nav.Link> */}
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="/about">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>*/}
      </Container> 
    </Navbar>
    </Router>

    // <div className="App">
      
    //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="/">More deets</Nav.Link>
    //         <Nav.Link eventKey={2} href="/about">
    //           Dank memes
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    

    // {/* Your page here */}
    // {/* <Login /> */}
    // {/* <Instructions /> */}
    // {/* <Questionhub /> */}
    // {/* <Coding></Coding> */}
    // {/* <Result /> */}
    // {/* <Testcases/> */}
    // {/* <Leaderboard s="0" e="9"/> */}
    // {/* <Submissions /> */}
    // <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum alias beatae assumenda impedit suscipit, aspernatur, deserunt, doloremque facere fugiat culpa ipsa! Distinctio quisquam dicta iure ea qui suscipit blanditiis voluptas quidem voluptatem esse, nihil libero eveniet maxime debitis est asperiores accusamus animi aspernatur voluptatum incidunt voluptate, omnis expedita unde labore.</h1>
    //   {/* <nav>
    //     <Link to="/about">About</Link>
    //   </nav> */}
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#features">Features</Nav.Link>
    //         <Nav.Link href="#pricing">Pricing</Nav.Link>
    //         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="#deets">More deets</Nav.Link>
    //         <Nav.Link eventKey={2} href="#memes">
    //           Dank memes
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    // </div>
  );
}

export default App;
