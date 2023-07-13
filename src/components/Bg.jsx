import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carder from './Carder';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav.jsx';


function Bg({ onDelete, data, permission }) {
  const navigate = useNavigate();
  function displayFunc(data) {
    if (data.length > 0) {
      return (
        <Container fluid>
          <Row>

            {
              data.map((item) => <Col><Carder key={item.id} onDelete={onDelete} items={item}></Carder></Col>)
            }

          </Row>
        </Container>
      )
    }
    else {
      return(
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">No Bookings...</h1>
          <p class="lead">Let's wait for the bookings....</p>
        </div>
      </div>
      )
    }
  }
  if (permission) {
    return (
      <>
        <AdminNav />
        {displayFunc(data)}
      </>
    );
  }
  else {
    return (
      alert("You are not authorized to access this page, please login to continue!"), navigate("/Login")


    );
  }
}

export default Bg;