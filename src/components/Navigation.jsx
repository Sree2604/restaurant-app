import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import './Home.jsx';
import './AddTask.jsx';
import './Admin.jsx';

function Navigation() {
  return (
    <div className='' id = 'navigate' >
    <Navbar expand="lg" className="bg-body-tertiary"  >
      <Container >
        <Navbar.Brand href="#home" className=''><b>Restaurant</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="ms-auto">
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="./AddTask" >Booking</Nav.Link>
            <Nav.Link href="./Login">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;
