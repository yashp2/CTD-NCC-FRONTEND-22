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
        <Route path="/testcases"  element={(props) => (<Testcases {...props} />)} exact />
        <Route path="/submissions"  element={<Submissions />} exact />
        <Route path="/leaderboard"  element={<Leaderboard />} exact />
        <Route path="/result"  element={<Result />} exact />
        <Route path="*"  element={<Notfound />}  />
        
      </Routes>

    <Navbarr />
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
      <Container className='d-flex justify-content-center align-items-center '>
        <Navbar.Brand href="#home">Made with <img src={heart} alt="" srcset="" className="hearth" /> by PISB Web Team</Navbar.Brand>
      </Container> 
    </Navbar>
    </Router>


  );
}

export default App;
