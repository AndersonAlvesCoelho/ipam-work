
import React from "react";
import { Row, Col, Card } from '@themesberg/react-bootstrap';


export default () => {
  return (
    <div>
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
              Copyright © 2021
              <Card.Link
                href="https://github.com/AndersonAlvesCoelho"
                target="_blank"
                className="text-blue text-decoration-none fw-normal">
                Anderson Alves Coelho
              </Card.Link>
            </p>
          </Col>
        </Row>
      </footer>
    </div>
  );
};
