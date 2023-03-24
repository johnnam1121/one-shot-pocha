import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { InstagramEmbed } from 'react-social-media-embed';

function Gallery() {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: '#333333' }}>
        <h1 className='footerText'>WORK IN PROGRESS</h1>
        <h1 className='footerText'>Check us out on Instagram!</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/Ck5A9WAjSyJ/" width={328} />
          {/* https://www.instagram.com/reel/Ck5A9WAjSyJ/?igshid=YmMyMTA2M2Y */}
        </div>

      </Row>
    </Container>
  )
}

export default Gallery
