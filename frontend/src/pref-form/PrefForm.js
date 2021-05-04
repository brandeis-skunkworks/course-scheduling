import React from 'react';
import './PrefForm.css';
import Select from './Select';
import TextArea from './TextArea';
import EmptyForm from './EmptyForm';

import blocks from '../block-sched/blocks.js';

import { connect } from 'react-redux';
import { addPreference, deletePreference, deleteChosenCourse } from '../redux/actions'

function AddPreferenceForm(props) {
  return (
    <div>
      {Object.entries(props.chosen_courses).length === 0 && <EmptyForm />}
      {Object.entries(props.chosen_courses).length !== 0 && <PreferencesForm blocks={props.chosen_courses}
        value={props.value}
        addPreference={props.addPreference}
        deletePreference={props.deletePreference} 
        deleteChosenCourse={props.deleteChosenCourse}/>}
    </div>
  );
}

class PreferencesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        preference: -1,
        indication: "",
        description: ""
      },
      preferenceOptions: [
        { id: 0, value: "MUST (you can only teach in this block)" },
        { id: 1, value: "PREFERRED-1 (highly preferred)" },
        { id: 2, value: "PREFERRED-2 (preferred)" },
        { id: 3, value: "PREFERRED-3 (slightly preferred)" },
        { id: 4, value: "NO (you CANNOT teach in this block)" },
      ],
      professorOptions: [
        { id: 0, value: "Michael" },
        { id: 1, value: "Tim" },
        { id: 2, value: "Antonella" }
      ],
      courseOptions: [
        { id: "GENERAL", value: "GENERAL (for more than 1 course)" },
        { id: "193COSI-10A-2", value: "193COSI-10A-2 : Introduction to Problem Solving in Python" },
        { id: "193COSI-21A-1", value: "193COSI-21A-1 : Data Structures and the Fundamentals of Computing" },
        { id: "193COSI-101A-1", value: "193COSI-101A-1 : Fundamentals of Artificial Intelligence" }
      ]
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState(prevState => ({
      value: {
        ...prevState.value,
        [name]: val
      }
    }),
    );
  }

  findInfo(id) {
    return blocks.filter(block => block.id === id)[0];
  }

  handleSubmit(e) {
    e.preventDefault();
    let toSubmit = this.state.value;
    Object.entries(this.props.blocks).map(arr => arr[1]).map(value => {
      toSubmit['block'] = this.findInfo(value.id);
      console.log(toSubmit);
      return this.props.addPreference(toSubmit);
    });
    this.clearAll();
    Object.entries(this.props.blocks).map(arr => arr[1]).forEach(val => this.props.deleteChosenCourse(val.id));
  }

  clearAll() {
    this.setState(prevState => ({
      value: {
        preference: -1,
        professor: -1,
        indication: "",
        description: ""
      }
    }),
    );
  }

  deleteBlocks() {
    Object.entries(this.props.blocks).map(arr => arr[1]).forEach(obj => this.props.deletePreference(obj.id));
  }

  deleteChosenBlocks() {
    Object.entries(this.props.blocks).map(arr => arr[1]).forEach(val => this.props.deleteChosenCourse(val.id));
  }

  getName() {
    const names = Object.entries(this.props.blocks).map(arr => arr[1]);
    let namesStr = "";
    for (let i = 0; i < names.length; i++) {
      namesStr += names[i].name;
      if (i < names.length - 1) {
        namesStr += ", ";
      }
    }
    return namesStr;
  }

  renderForm() {
    return (
      <form className="text-center border border-primary p-3" onSubmit={this.handleSubmit}>
        <h3 className="form_title">BLOCK PICKED: {this.getName()} </h3>

        <Select title={"Professor"}
          name={"professor"}
          options={this.state.professorOptions}
          value={this.state.value.professor}
          placeholder={"Select the professor that has this preference"}
          handleChange={this.handleInput} />

        <Select title={"Preference"}
          name={"preference"}
          options={this.state.preferenceOptions}
          value={this.state.value.preference}
          placeholder={""}
          handleChange={this.handleInput} />

        <Select title={"Course indicated"}
          name={"indication"}
          options={this.state.courseOptions}
          value={this.state.value.indication}
          placeholder={""}
          handleChange={this.handleInput} />

        <TextArea
          title={"Comments (optional)"}
          value={this.state.value.description}
          name={"description"}
          handleChange={this.handleInput}
          placeholder={""} />

        <input className="btn btn-primary btn_form" type="submit" value="Submit" />
        <button type="button" className="btn btn-secondary btn_form" onClick={() => this.clearAll()}>Clear</button>
      </form>
    );
  }

  renderSubmitted() {
    const block_value = Object.entries(this.props.value).filter(val => val[0] in this.props.blocks && val[0] === this.props.blocks[val[0]].id)[0][1];
    return (
      <div className="submitted text-center border border-primary p-3">
        <h3 className="form_title">BLOCK PICKED: {this.getName()} </h3>

        <div className="content_submitted">
          <h5>Professor: {"aaa"}</h5>
          <h5>Preference: {this.state.preferenceOptions.filter(val => val.id + "" === block_value.preference)[0].value.split(" ", 2)[0]}</h5>
          <h5>Indication: {block_value.indication}</h5>
          <h5>Description: {block_value.description}</h5>
        </div>
        <button type="button" className="btn btn-secondary btn_form" onClick={() => this.deleteBlocks()}>Delete</button>
      </div>
    );
  }

  exists() {
    return Object.keys(this.props.blocks).some(id => id in this.props.value);
  }

  render() {
    return (
      <div className="main_pref">
        {!this.exists() && this.renderForm()}
        {this.exists() && this.renderSubmitted()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chosen_courses: state.chosen_courses,
  value: state.value,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addPreference: (pref) => { dispatch(addPreference(pref)) },
    deletePreference: (id) => { dispatch(deletePreference(id)) },
    deleteChosenCourse: (id) => { dispatch(deleteChosenCourse(id)) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPreferenceForm);