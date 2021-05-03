import React from 'react';
import './Review.css';
import blocks from '../block-sched/blocks.js';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { deletePreference } from '../redux/actions'

function Review(props) {
    const mustList = Object.entries(props.value).filter(val => props.value[val[0]].preference === "0").map(val =>
        <ReviewCard id={val[0]} info={val[1]} deletePreference={props.deletePreference} textstyle="text-danger"/>
    );
    const prefList = Object.entries(props.value).filter(val => ["1", "2", "3"].includes(props.value[val[0]].preference)).map(val =>
        <ReviewCard id={val[0]} info={val[1]} deletePreference={props.deletePreference} textstyle="text-warning"/>
    );
    const noList = Object.entries(props.value).filter(val => props.value[val[0]].preference === "4").map(val =>
        <ReviewCard id={val[0]} info={val[1]} deletePreference={props.deletePreference} textstyle="text-secondary"/>
    );

    return (
        <div className="overflow-auto">
            <Accordion>
                <CardAccordian eventKey="0" text="MUST" variant="danger" info={mustList}/>
                <CardAccordian eventKey="1" text="PREFERRED" variant="warning" info={prefList}/>
                <CardAccordian eventKey="2" text="NO" variant="secondary" info={noList}/>
            </Accordion>
        </div>
    )
}

function CardAccordian(props) {
    console.log(props.eventKey);
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant={props.variant} eventKey={props.eventKey}>
                    {props.text}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body>{props.info}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

function ReviewCard(props) {
    function findInfo(id) {
        return blocks.filter(block => block.id === id)[0];
    }

    const block = findInfo(props.id);
    const block_value = props.info;

    return (
        <div id={props.id} className="card">
            <div class="card-body">
                <div className="border p-3">
                    <h5 className={"form_title " + props.textstyle}>BLOCK: {block.name} </h5>
                    <div className="content_submitted">
                        <p>Preference: {block_value.preference}</p>
                        <p>Indication: {block_value.indication}</p>
                        <p>Description: {block_value.description}</p>
                    </div>
                    <button type="button" class="btn btn-secondary btn_form" onClick={() => props.deletePreference(props.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    value: state.value,
});

const mapDispatchToProps = (dispatch) => {
    return {
        deletePreference: (id) => { dispatch(deletePreference(id)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);