import React, { Component } from 'react'
import { Button, Col, Row, Container, Form } from  'react-bootstrap'

class DynamicForm extends Component {

    render() {
        return (
            <div className="App">
                <DynamicForm className="form"
                    title = "Requirements"
                    model={[
                        {key: "course-name", label: "Course Name", props:{required: true}},

                    ]}
                    onSubmit = {(model) => {this.onSubmit(model)}}
                />

                <pre style={{width: "500px"}}>
                    {JSON.stringify(this.state.data)}
                </pre>
            </div>
        )
    }
}

export default DynamicForm;