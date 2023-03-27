import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ImageGallery.css'

import Img1 from '../assets/pexels1.jpg';
import Img2 from '../assets/pexels2.jpg';
import Img3 from '../assets/pexels3.jpg';
import Img4 from '../assets/pexels4.jpg';
import Img5 from '../assets/pexels1.jpg';

import Img6 from '../assets/pexels2.jpg';
import Img7 from '../assets/pexels3.jpg';
import Img8 from '../assets/pexels4.jpg';
import Img9 from '../assets/pexels1.jpg';
import Img10 from '../assets/pexels2.jpg';

import Img11 from '../assets/pexels3.jpg';
import Img12 from '../assets/pexels4.jpg';
import Img13 from '../assets/pexels1.jpg';
import Img14 from '../assets/pexels2.jpg';
import Img15 from '../assets/pexels3.jpg';

const imgSet1 = [Img1, Img2, Img3, Img4, Img5]
const imgSet2 = [Img6, Img7, Img8, Img9, Img10,]
const imgSet3 = [Img11, Img12, Img13, Img14, Img15,]

function ImageGallery() {
  return (
    <Container fluid className='galleryBackground'>
      <Row className='align-items-center text-center'>
        <h4 className='galleryHeading'>Check us out on instagram!</h4>
        <Col md={{ span: 3 }}>
          {imgSet3.map(image =>
            <img className='galleryImage mb-3' key={image} src={image} />)
          }
        </Col>
        <Col md={{ span: 3 }}>
          {imgSet3.map(image =>
            <img className='galleryImage mb-3' key={image} src={image} />)
          }
        </Col>
        <Col md={{ span: 3 }}>
          {imgSet3.map(image =>
            <img className='galleryImage mb-3' key={image} src={image} />)
          }
        </Col>
        <Col md={{ span: 3 }}>
          {imgSet3.map(image =>
            <img className='galleryImage mb-3' key={image} src={image} />)
          }
        </Col>
      </Row>
    </Container>
  )
}

export default ImageGallery