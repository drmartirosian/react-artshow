import React from 'react';
import { Carousel } from 'react-bootstrap';
import Img1 from '../img/1.jpg';

function ImgGallery() {

  return (
    <div>
      <Carousel >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{'height':"500px"}} 
            src={Img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{'height':"500px"}} 
            src={Img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>  
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{'height':"500px"}} 
            src={Img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImgGallery;