import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import modern from './Modern-Luxury-Restaurant-Sofa-Set.jpg'
import newimage from './food.jpg'
import './Cards.css'

function Cards() {
  return (
<div id='cardalign'>
<CardGroup className='group1'>
<Card id='card1' className='me-5' >
  <Card.Img variant="top"/>
  <img className='photo' src={modern} alt="firstimage"/>
  <Card.Body>
    <Card.Title>Dine In</Card.Title>
    <Card.Text>
      Choose a perfect place with your perfect family and friends!
      Have a pleasant ambiance!!
    </Card.Text>
  </Card.Body>
  <Button variant="primary" id='btn1'>Check In!</Button>
  
</Card>
<Card id='card2' className='me-5'>
  <Card.Img variant="top"/>
  <img className='photo' src={newimage} alt="secondimage" />
  <Card.Body>
    <Card.Title>Taste Our Food</Card.Title>
    <Card.Text>
      Have a Tasty and Healthy food! Just Choose It !
      Feel It ! Taste It ! 
    </Card.Text>
  </Card.Body>
  <Button variant="primary" id='btn2' >Taste It!</Button>
</Card>
</CardGroup>

</div>

  );
}
export default Cards;
