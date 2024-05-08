import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <>
      <Container>
        <Row>
            <Col className='text-center py-3'>
            <p>EzSHOP AbdAleem &copy;{currentYear} </p>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
