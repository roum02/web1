import React from "react";

// reactstrap components
import { Button, Container, Row, Col, Badge } from "reactstrap";

// Core Components

function ContactUs() {
  return (
    <>
      <div className="contactus-3">
        <Container className="my-5">
          <Row>
            <Col className="text-center my-6" md="12">
              <h1 className="display-5 display-5 font-weight-900 m-h2">
                Contact us
              </h1>
            </Col>
          </Row>
          {/*모바일 화면 시작 */}
          <div className="web-display-none">
            <Row className="justify-content-center mb-6">
              <Col xs="2">
                <div className="icon icon-shape icon-shape-primary icon-md rounded-circle text-white mt-1">
                  <i className="ni ni-email-83"></i>
                </div>
              </Col>
              <Col xs="6">
                <h4 className="info-title m-0">E-mail</h4>
                <p className="description info-title text-muted m-0">
                  dataedu@datamarketing.co.kr
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-6">
              <Col xs="2">
                <div className="icon icon-shape icon-shape-primary icon-md rounded-circle text-white mt-1">
                  <i className="ni ni-mobile-button"></i>
                </div>
              </Col>
              <Col xs="6">
                <h4 className="info-title m-0">Phone</h4>
                <p className="description info-title text-muted m-0">
                  02-6011-5407, 5418
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-6">
              <Col xs="2">
                <div className="icon icon-shape icon-shape-primary icon-md rounded-circle text-white mt-1">
                  <i className="ni ni-square-pin"></i>
                </div>
              </Col>
              <Col xs="6">
                <h4 className="info-title m-0">Address</h4>
                <p
                  style={{ letterSpacing: "-1px" }}
                  className="description info-title text-muted m-0"
                >
                  서울특별시 강남구 테헤란로 53길 16
                  <br />
                  3층(역삼동, 예안빌딩)
                </p>
              </Col>
            </Row>
          </div>
          {/*모바일 화면 끝*/}
          <Row className="m-d-n">
            <Col lg="4" md="4" xs="12">
              <div className="info info-hover">
                <div className="icon icon-shape icon-shape-primary icon-md rounded-circle text-white">
                  <i className="ni ni-email-83"></i>
                </div>
                <h4 className="info-title">E-mail</h4>
                <p className="description px-0 text-muted">
                  dataedu@datamarketing.co.kr
                </p>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12">
              <div className="info info-hover">
                <div className="icon icon-shape icon-shape-primary icon-md rounded-circle text-white">
                  <i className="ni ni-mobile-button"></i>
                </div>
                <h4 className="info-title">Phone</h4>
                <p className="description px-0 text-muted">
                  02-6011-5407, 5418
                </p>
              </div>
            </Col>
            <Col lg="4" md="4" xs="12">
              <div className="info info-hover">
                <div className="icon icon-shape icon-shape-primary icon-md rounded-circle text-white">
                  <i className="ni ni-square-pin"></i>
                </div>
                <h4 className="info-title">Address</h4>
                <p className="description px-0 text-muted">
                  서울특별시 강남구 테헤란로 53길 16 <br />
                  3층(역삼동, 예안빌딩)
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactUs;
