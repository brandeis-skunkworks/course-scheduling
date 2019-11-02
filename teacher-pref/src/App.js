import React from 'react';
import './App.css';
import empty_pic from './img/touch_hand.jpg';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-1">
          <Header/>
        </div>

        <TeacherPref/>

      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="app_header">
        <p>This is the header</p>
    </div>
  );
}

class TeacherPref extends React.Component {
  constructor(props) {
    super(props);
    this.setCourse = this.setCourse.bind(this);
    this.state = {
      chosen_course: "",
      reviewing: false,
      submitted: false
    }
  }

  setCourse(id) {
    this.setState({chosen_course: id})
    console.log(this.state.chosen_course)
  }

  render() {
    return (
      <div className="content_pref">
        <div className="col-2">
          <MainSection/>
        </div>

        <div className="col-3">
          <TimeBlockBoard updateChosen={this.setCourse}/>
        </div>
      </div>
    );
  }
}

class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen_course: ""
    }
  }

  render() {
    return (
      <div className="pref_main">
        <div className="pref_main_header">
          <h2>TEACHER PREFERENCES FORM</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
  
        <div className="pref_main_content">
          <AddPreferenceForm chosen_course = {this.state.chosen_course}/>
        </div>
  
        <div className="pref_main_buttons">
          <button onClick={() => this.props.chosen_course = null}>Clear</button>
        </div>
   
      </div>
    );
  }
}

function AddPreferenceForm(props) {
  if (props.chosen_course == null || props.chosen_course === "") {
    return (
      <div className="empty_form">
        <img src={empty_pic} alt="No form chosen"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    );
  } else {
    return (
      <div className="chosen_form">
        <PreferencesForm/>
      </div>
    );
  }
} 

class PreferencesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class TimeBlockBoard extends React.Component {
  constructor(props) {
    super(props);
    this.output = this.output.bind(this);
    this.state = {
      chosen_course: ""
    }
    this.props.updateChosen(this.state.chosen_course);
  }

  output(evt) {
    this.setState({chosen_course: evt})
    // console.log(this.state)
  }

  renderTimeBlock(i) {
    return <TimeBlock chosen_course={i} setCourse={this.output}/>
  }

  render() {
    return (
      <div className="pref_block">
        {this.renderTimeBlock(1)}
      </div>
    );
  }
}

function TimeBlock(props) {
  return (
    <button className="block" onClick={() => props.setCourse(props.chosen_course)}>Course { props.chosen_course }</button>
  );
}

export default App;
