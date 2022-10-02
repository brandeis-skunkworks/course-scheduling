import React from 'react';
// import blocks from './blocks.png';
import './components/Scheduling/Scheduling.css';
// import { Switch, Route, Link } from 'react-router-dom';
// import './Reminder';
// import Navigation from './Navigation.js';


var currentPage;

const Scheduling = () => {
  currentPage = new SchedulingPage;
  return currentPage;
}

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      semester: props.semester,
      classTotal: props.classTotal,
      classReq: props.classReq,
      teacherTotal: props.teacherTotal,
      teacherInput: props.teacherInput,
      classInput: props.classInput
    };
  }

  render() {
    return (
      <tr>
        <th scope="row">{this.state.semester}</th>
        <td>{this.state.classReq}/{this.state.classTotal}</td>
        <td>{this.state.teacherInput}/{this.state.teacherTotal}</td>
        <td>{this.state.classInput}/{this.state.classTotal}</td>
      </tr>
    )
  }
}

/**
 * Course Scheduling Web-App
 */
class SchedulingPage extends React.Component {
  constructor(props) {
    super(props);
    // this.updateDisplay = this.updateDisplay.bind(this);
    // // this.state = { user: {} };
    // this.state = {
    //   currentDisplay: <Display id="test id" name="test name" />
    // }
    // this.onSubmit = this.handleSubmit.bind(this);
  }
  // updateDisplay(newDisplay) {
  //   this.setState(state => ({
  //     currentDisplay: newDisplay
  //   }));
  // }

  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    console.log("going to submit");
    const data = { name: self.refs.name.value }

    // On submit of the form, send a POST request with the data to the server.
    fetch('/save', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        console.log("returning response:");
        return response.json();
      }).then(function (body) {
        console.log(body);
      });
  }

  render() {
    return (
      <div>
        <div className="col-lg-5 col-md-6 col-sm-6">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Semester Name</th>
                <th scope="col-lg-4 col-md-0 col-sm-0">Class with requirement</th>
                <th scope=" col-lg-4 col-md-0 col-sm-0">Teacher with input</th>
                <th scope=" col-lg-4 col-md-0 col-sm-0">Class scheduled</th>
              </tr>
            </thead>
            <tbody>
              <Row semester="Spring 2019" classTotal="50" classReq="10" teacherTotal="20" teacherInput="5" classInput="30"></Row>
              <Row semester="Fall 2019" classTotal="55" classReq="15" teacherTotal="25" teacherInput="20" classInput="40"></Row>
              <Row semester="Spring 2020" classTotal="30" classReq="5" teacherTotal="30" teacherInput="29" classInput="25"></Row>
            </tbody>
          </table>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-6">

        </div>
      </div>
    );
  }
}

export default Scheduling;