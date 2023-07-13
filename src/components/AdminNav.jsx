import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import './Home.jsx';
import './Bg.jsx';
import './LogOut.jsx';

function AdminNav() {
  return (
    <div className='' id = 'navigate' >
    <Navbar expand="lg" className="bg-body-tertiary"  >
      <Container >
        <Navbar.Brand href="#home" className=''><b>Restaurant</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="ms-auto">
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="./LogOut" >Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default AdminNav;
