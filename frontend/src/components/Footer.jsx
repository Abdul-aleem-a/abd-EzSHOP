import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Container className="bg-primary" fluid>
        <Row>
          <Col className="text-center py-3 text-white">
              <h5><p style={{height: "20px"}}>
                EzSHOP AbdAleem &copy;{currentYear} All rights reserved{" "}
              </p>
              </h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
