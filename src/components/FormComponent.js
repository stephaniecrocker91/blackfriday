import React from 'react';
import styles from '../styles/FormComponent.module.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


const FormComponent = () => {
return <Container className={styles.FormComponent}>
        <Form> 
        <h3>Become a VIP</h3>
        <p>Join Us and Unlock VIP Access to Exclusive Deals Before Anyone Else!</p>
        <Form.Group className="mb-3"
            as={Row}
            controlId="formBasicName">
            <Form.Label column
                sm={2}>Name</Form.Label>
            <Col sm={10}>
                <Form.Control type="name" placeholder="Enter name"/>
            </Col>
        </Form.Group>

        <Form.Group className="mb-3"
            as={Row}
            controlId="formBasicEmail">
            <Form.Label column
                sm={2}>Email address</Form.Label>
            <Col sm={10}>
                <Form.Control type="email" placeholder="Enter email"/>
            </Col>
        </Form.Group>

        <Form.Group className="mb-3"
            as={Row}
            controlId="formBasicTelephone">
            <Form.Label column
                sm={2}>Telephone</Form.Label>
            <Col sm={10}>
                <Form.Control type="telephone" placeholder="Enter telephone"/>
            </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Container>;
};

export default FormComponent;
