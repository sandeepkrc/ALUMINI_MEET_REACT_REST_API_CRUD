import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import shubhamSingh from './images/shubhamSingh.png'
import prateek from './images/prateek.jpg'
import neeraj from './images/neeraj.jpg'
import faizan from './images/faizan.jpg'
import sandeep from './images/sandeep.jpg'

const Ourteam = () => {
    return (
        <div id="ourteam">
            <Container style={{ 'margin-top': '50px' }}>
                <Row >
                    <Col xs={12} md={12} className="d-flex align-items-center justify-content-center">
                        <h1 style={{ 'margin-bottom': '50px' }}>Our Team</h1>
                    </Col>
                </Row>

                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={shubhamSingh} width="10px" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>Shubham Singh</Card.Title>
                                        <h3 style={{ 'color': 'grey' }}>Full Stack</h3>
                                        <Card.Text>
                                            Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={prateek} width="10px" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>Prateek Chaurasiya</Card.Title>
                                        <h3 style={{ 'color': 'grey' }}>Full Stack</h3>
                                        <Card.Text>
                                            Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={{ 'padding': '100px;' }}> &nbsp;</div>
                <hr />
                <div style={{ 'padding': '100px;' }}> &nbsp;</div>
                <Row xs={1} md={2} className="g-4" >
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={neeraj} width="10px" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>Neeraj Tiwari</Card.Title>
                                        <h3 style={{ 'color': 'grey' }}>Data Scientist</h3>
                                        <Card.Text>
                                            Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={faizan} width="10px" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>Faizan</Card.Title>
                                        <h3 style={{ 'color': 'grey' }}>UI Lead</h3>
                                        <Card.Text>
                                            Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div style={{ 'padding': '100px;' }}> &nbsp;</div>
                <hr />
                <div style={{ 'padding': '100px;' }}> &nbsp;</div>
                <Row xs={1} md={2} className="g-4" >
                    <Col>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={sandeep} width="10px" />
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ border: 'none' }}>
                                    <Card.Body>
                                        <Card.Title>Sandeep</Card.Title>
                                        <h3 style={{ 'color': 'grey' }}>Full Stack </h3>
                                        <Card.Text>
                                            Work Experiance on Diffrent Technologies like django, React, Javascript, Html, Css, Rest API, Machine Learning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <div style={{ 'padding-top': '120px;' }}> &nbsp;</div>
            </Container >

        </div>

    )
}

export default Ourteam
