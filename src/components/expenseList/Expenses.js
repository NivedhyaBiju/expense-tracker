import React from 'react'
import "./expenses.css";
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEye } from "react-icons/fa";

function Expenses() {
    return (
        <div className="expenses">
            <div className="sort">
                <button className="b2">Sort by Amount</button>
            </div>
            <div className="container">
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Date: 10/06/2024</Card.Header>
                            <Card.Body>
                                <Card.Title>HOME</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, quos?</p>
                                    <h4>Amount: - 250 $</h4>
                                </Card.Text>
                                <Button className="b1" variant="primary">
                                    <FaEye style={{ color: 'black' }} />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Date: 10/06/2024</Card.Header>
                            <Card.Body>
                                <Card.Title>OFFICE</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, quos?</p>
                                    <h4>Amount: - 250 $</h4>
                                </Card.Text>
                                <Button className="b1" variant="primary">
                                    <FaEye style={{ color: 'black' }} />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Date: 10/06/2024</Card.Header>
                            <Card.Body>
                                <Card.Title>PERSONAL</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, quos?</p>
                                    <h4>Amount: - 250 $</h4>
                                </Card.Text>
                                <Button className="b1" variant="primary">
                                    <FaEye style={{ color: 'black' }} />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Header>Date: 10/06/2024</Card.Header>
                            <Card.Body>
                                <Card.Title>OTHERS</Card.Title>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, quos?</p>
                                    <h4>Amount: - 250 $</h4>
                                </Card.Text>
                                <Button className="b1" variant="primary">
                                    <FaEye style={{ color: 'black' }} />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="total">
                    <h4>Total Amount: - 1250.8745 $</h4>
                </div>
            </div>
        </div>
    )
}

export default Expenses
