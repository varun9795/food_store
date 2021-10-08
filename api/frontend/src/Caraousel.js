import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Caraousel=()=>{
    return <><Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://c4.wallpaperflare.com/wallpaper/728/259/631/spices-pepper-food-spoons-wallpaper-preview.jpg"
        alt="First slide"
      />
      <Carousel.Caption style={{top:"2vh",width:"50px"}}>
        <h3 style={{color:"#53B8BB",textAlign:"center",fontFamily:"Birthstone",fontWeight:"bold",fontSize:"4vw"}}>"GOOD  FOOD  AND  GREAT  VIBES"</h3>
        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://c4.wallpaperflare.com/wallpaper/495/760/53/cuisine-food-india-indian-wallpaper-preview.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption style={{top:"auto" ,bottom:"40%"}}>
        <h3 style={{fontFamily:"cursive",fontSize:"2.5vw"}}>"THE TASTY PLACE"</h3>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://unsplash.com/photos/frd3IY-gFEE/download?force=true"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3 style={{float:"left",marginBottom:"180px",fontFamily:"Birthstone",fontSize:"4vw"}}>"DON'T SAY NO TO TEA"</h3>
        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
}

export default Caraousel;