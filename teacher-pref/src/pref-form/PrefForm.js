import React from 'react';
import './PrefForm.css';
import Select from './Select';
import TextArea from './TextArea';
import EmptyForm from './EmptyForm';

import { connect } from 'react-redux';
import { addPreference, deletePreference } from '../redux/actions'

function AddPreferenceForm(props) {
  return (
    <div>
      {props.chosen === '' && <EmptyForm />}
      {props.chosen !== '' && <PreferencesForm block={props.chosen}
        value={props.value}
        addPreference={props.addPreference}
        deletePreference={props.deletePreference} />}
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
        { id: 1, value: "PREFERRED - 1 (highly preferred)" },
        { id: 2, value: "PREFERRED - 2 (preferred)" },
        { id: 3, value: "PREFERRED - 3 (slightly preferred)" },
        { id: 4, value: "NO (you CANNOT teach in this block)" },
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

  handleSubmit(e) {
    e.preventDefault();
    const toSubmit = this.state.value;
    toSubmit['block'] = this.props.block;
    console.log(toSubmit);
    this.props.addPreference(toSubmit);
    this.clearAll();
  }

  clearAll() {
    this.setState(prevState => ({
      value: {
        preference: -1,
        indication: "",
        description: ""
      }
    }),
    );
  }

  renderForm() {
    return (
      <form className="text-center border border-primary p-3" onSubmit={this.handleSubmit}>
        <h3 className="form_title">BLOCK PICKED: {this.props.block.name} </h3>
        <Select title={"Preference"}
          name={"preference"}
          options={this.state.preferenceOptions}
          value={this.state.value.preference}
          placeholder={""}
          handleChange={this.handleInput} />

        <Select title={"Indicated for"}
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
        <button type="button" class="btn btn-secondary btn_form" onClick={() => this.clearAll()}>Clear</button>
      </form>
    );
  }

  renderSubmitted(block_value, block) {
    return (
      <div className="submitted text-center border border-primary p-3">
        <h3 className="form_title">BLOCK PICKED: {block.name} </h3>

        <div className="content_submitted">
          <h5>Preference: {block_value.preference}</h5>
          <h5>Indication: {block_value.indication}</h5>
          <h5>Description: {block_value.description}</h5>
        </div>
        <button type="button" class="btn btn-secondary btn_form" onClick={() => this.props.deletePreference(block.id)}>Delete</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {!(this.props.block.id in this.props.value) && this.renderForm()}
        {this.props.block.id in this.props.value && this.renderSubmitted(this.props.value[this.props.block.id], this.props.block)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chosen: state.chosen,
  value: state.value,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addPreference: (pref) => { dispatch(addPreference(pref)) },
    deletePreference: (id) => { dispatch(deletePreference(id)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPreferenceForm);