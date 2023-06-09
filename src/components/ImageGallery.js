import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa';
import './ImageGallery.css';
import { photos1, photos2, photos3, photos4 } from './ImagePhotos';

function ImageGallery() {
  return (
    <Container fluid className='galleryBackground'>
      <Row className='col-xs-6 mt-3'>
        <h1 className='mobileHeading mobileHeadingHide'>Check out our Instagram! <a className='galleryInstaLink' target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/oneshot.htx/?hl=en'><FaInstagram size={'2em'} /></a>
        </h1>
        <Col md={{ span: 2, offset: 2 }} className='galleryColumn'>
          {photos1.map((item) => {
            return (
              <a className='galleryLink' href={item.link} target="_blank" rel="noopener noreferrer" >
                <img className='img-fluid mobileImage galleryImage' src={item.src} />
              </a>
            )
          })}
        </Col>
        <Col md={{ span: 2 }} className='galleryColumn'>
          {photos2.map((item) => {
            return (
              <a className='galleryLink' href={item.link} target="_blank" rel="noopener noreferrer" >
                <img className='img-fluid mobileImage galleryImage' src={item.src} />
              </a>
            )
          })}
        </Col>
        <Col md={{ span: 2 }} className='galleryColumn'>
          {photos3.map((item) => {
            return (
              <a className='galleryLink' href={item.link} target="_blank" rel="noopener noreferrer" >
                <img className='img-fluid mobileImage galleryImage' src={item.src} />
              </a>
            )
          })}
        </Col>
        <Col md={{ span: 2 }} className='galleryColumn'>
          {photos4.map((item) => {
            return (
              <a className='galleryLink' href={item.link} target="_blank" rel="noopener noreferrer" >
                <img className='img-fluid mobileImage galleryImage' src={item.src} />
              </a>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default ImageGallery