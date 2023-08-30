import React from 'react';
import styles from '../styles/FormComponent.module.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';


const FormComponent = () => {
return <>
<div className={styles.FormComponent}>
    <div className={styles.FormContent}>
        <Form> 
        <h3>Become a <strong>VIP</strong> <i class="fa-regular fa-gem"></i></h3>
        <p>Join Us and Unlock VIP Access to Exclusive Deals Before Anyone Else!</p>
        <Form.Group className="mb-3"
            as={Row}
            controlId="formBasicName"> 
            <Col sm={12}>
                <Form.Control 
                type="name" 
                placeholder="Enter name" 
                className={styles.FormControl}/>
            </Col>
        </Form.Group>

        <Form.Group className="mb-3"
            as={Row}
            controlId="formBasicEmail">  
            <Col sm={12}>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                className={styles.FormControl}/>
            </Col>
        </Form.Group>

        <Form.Group className="mb-3"
            as={Row}
            controlId="formBasicTelephone">
            <Col sm={12}>
                <Form.Control 
                type="telephone" 
                placeholder="Enter 
                telephone" className={styles.FormControl}/>
            </Col>
        </Form.Group>

        <Button variant="primary" type="submit" className={styles.Button}>
            Submit
        </Button>
        </Form>
        </div>
        </div>
        </>;
};

export default FormComponent;
