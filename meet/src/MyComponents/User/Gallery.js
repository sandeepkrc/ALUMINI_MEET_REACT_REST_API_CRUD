import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import i2 from "./images/slider/DSC_3779.JPG";
import i3 from "./images/slider/DSC_3838.JPG";
import i1 from "./images/slider/image1.jpg";

const Gallery = () => {
    return (
        <div id="gallery">

            <Container style={{ 'margin-top': '30px', 'padding': '30px' }}>
                <Row>
                    <Col xs={12} md={12} className="d-flex align-items-center justify-content-center">
                        <h1 style={{ 'margin-bottom': '50px' }}>Gallery</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <Image src={i2} thumbnail />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6}>
                        <Image src={i1} thumbnail />
                    </Col>
                    <Col xs={6} md={6}>
                        <Image src={i3} thumbnail />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Gallery
