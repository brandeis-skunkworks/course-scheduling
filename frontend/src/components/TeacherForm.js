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

    submit = () => {
        console.log("submitting course to db");
        // event.preventdefault();
    }
    
    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter course name" />
                    </Form.Group>

                </Form.Row>
                <Form.Row>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Prerequisite" />
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Corequisite" />
                    </Form.Group>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Recitation?" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Assign a professor to this course:</Form.Label>
                        <Form.Control as="select">
                            <option>prof1</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                
                <Button variant="primary" type="submit" onClick={() => {console.log("yay");}}>
                    Submit
                </Button>
            </Form>
        )
    }
}

export default TeacherForms;