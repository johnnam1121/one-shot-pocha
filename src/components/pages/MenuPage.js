import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../Footer'
import TopBar from '../Topbar'
import Menu from '../Menu'

function MenuPage() {
  return (
    <Container fluid>
      <Row>
        <TopBar />
        <Menu />
        <Footer />
      </Row>
    </Container>
  )
}

export default MenuPage