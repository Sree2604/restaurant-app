import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Carder.css';

function Carder({onDelete,items}) {
  const stl={textAlign:"left",color:"black"}
  return (
    <Card style={{ width: '18rem',border:'1px solid grey',marginTop:'10px',paddingLeft:"10px",paddingRight:"10px",paddingBottom:"10px",paddingTop:"10px"}}>
      <Card.Body>
        <Card.Title style={stl}>ID: {items.id}<Button onClick={()=>onDelete(items.id,items.table)}style={{width:"40px",marginLeft:"50%",background:"red",wordSpacing:"100px"}}>x</Button></Card.Title>
        <Card.Text style={stl}>
        <em>Name: </em><br></br>{items.name}
        </Card.Text>
        <Card.Text style={stl}>
        <em>Phno: </em><br></br>{items.phnum}
        </Card.Text>
        <Card.Text style={stl}>
        <em>Booked Table </em><br></br>{`Table ${items.table}`}
        </Card.Text>
        <Card.Text style={stl}>
        <em>Date: </em><br></br>{items.date}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Carder;