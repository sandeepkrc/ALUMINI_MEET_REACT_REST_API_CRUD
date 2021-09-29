import React from 'react'
import I1 from "../../images/2.jpg";
import { Container, Row, Col, Image } from 'react-bootstrap';

const Statistics = () => {
    return (
        <Container id="about" style={{ 'margin-top': '100px' }}>
            <Row >
                <Col xs={12} md={12} className="d-flex align-items-center justify-content-center">
                    <h1 style={{ 'margin-bottom': '50px' }}>Who We are</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                    <p style={{ 'text-align': 'justify', 'padding-right': '20px' }}>
                        During this event, alumni and students from all fields participate in events like Buddy Talks (to help students in overcoming the uncertainties, distinguished alumni from different sectors like Consultancy, Finance and Banking, FMCG, IT and Software etc are invited to give a talk pertaining to their sectors), Panel Discussion (thought provoking debates by alumni from various sectors on some of the despised, desired and debated topics in the institute today makes it an event not to be missed for sure),
                    </p>

                </Col>
                <Col xs={12} md={4} >

                    <Image src={I1} rounded className="rounded mx-auto d-block" style={{ maxWidth: '34rem' }} />

                </Col>
            </Row>
        </Container >
    )
}

export default Statistics
