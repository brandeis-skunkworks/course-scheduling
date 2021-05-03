import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { Button, Col, Row, Container, Form } from  'react-bootstrap'


class TeacherForms extends Component {
    state = {
        courseName: '',
        preReq: '',
        coReq: '',
        recitation: '',
        building: '',
    }
    
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Course Title</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Prerequisite" />
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Corequisite" />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Recitation?" />
                    </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default TeacherForms;