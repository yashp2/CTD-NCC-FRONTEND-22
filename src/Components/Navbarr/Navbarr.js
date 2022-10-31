import { useState } from 'react';
import './Navbarr.css';
import{Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import { NavLink, useLocation } from "react-router-dom";
function Navbarr(){
  const location = useLocation();
  console.log(location.pathname);
  const [nav_ins,unav_ins]=useState(false);
  const [nav_qh,unav_qh]=useState(false);
  const [nav_lb,unav_lb]=useState(false);
  const [nav_s,unav_s]=useState(false);
  if(location.pathname==="/coding/1"  ||location.pathname==="/coding/2"||location.pathname==="/coding/3"||location.pathname==="/coding/4" ||location.pathname==="/coding/5"||location.pathname==="/coding/6"|| location.pathname==="/instructions" || location.pathname==="/leaderboard" || location.pathname==="/questionhub" || location.pathname==="/testcases" || location.pathname==="/submissions"){
    
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
    <Container>
      <Navbar.Brand href="#home">Sponsor logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav >
          <Nav.Link href="/instructions" className={location.pathname==='/instructions'?"text-white nav-activee":"text-white"} >Instructions</Nav.Link>
          <Nav.Link href="/questionhub" className={location.pathname==='/questionhub'?"text-white nav-activee":"text-white"} >QuestionHub</Nav.Link>
          <Nav.Link href="/leaderboard" className={location.pathname==='/leaderboard'?"text-white nav-activee":"text-white"} >Leaderboard</Nav.Link>
          <Nav.Link href="/submissions" className={location.pathname==='/submissions'?"text-white nav-activee":"text-white"} >Submissions</Nav.Link>
          <Nav.Link href="/result" className='text-white '>Logout</Nav.Link>
        </Nav>
          <Navbar.Brand href="#home" className='mli-2'>IEEE logo</Navbar.Brand>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )

  }
  else{
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" >
    <Container>
      <Navbar.Brand href="#home">Sponsor logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav >
        </Nav>
          <Navbar.Brand href="#home" className='mli-2'>IEEE logo</Navbar.Brand>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
  }
    
}

export default Navbarr;