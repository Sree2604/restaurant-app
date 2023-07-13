import Carousel from 'react-bootstrap/Carousel';
// import './Carosel.css';

function Carosel() {
  return (
    <Carousel style={{height:"50%",width:"50%",left:"25%"}}>
      <Carousel.Item>
        <img style={{height:"50%",width:"50%"}}
          className="d-block w-100"
          src="src/components/food.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{color:"white",fontWeight:"bold"}}>Our Food</h3>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img style={{height:"50%",width:"50%"}}
          className="d-block w-100"
          src="src/components/Modern-Luxury-Restaurant-Sofa-Set.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img style={{height:"50%",width:"50%"}}
          className="d-block w-100"
          src="src/components/pngtree-restaurant-dining-table-and-pillow-on-terrace-outside-photo-image_2772145.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{color:"black",fontWeight:"bold"}}>Our Heaven</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosel;