import React from 'react';
import blocks from './blocks.png';
import './Scheduling.css';
import { Switch, Route, Link } from 'react-router-dom';
// import './Reminder';
import Navigation from './Navigation.js';

var currentPage;

const Scheduling = () => {
  currentPage = new SchedulingPage;
  return currentPage;
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
      <div className="app">
        {/* <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Name" ref="name" />
          <input type="text" placeholder="Email" ref="email" />
          <input type="submit" />
        </form> */}
        <div class="row">
          <div class="col-lg-2 col-md-0 col-sm-0 menu-bar align-items-end">
            <Navigation />
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6">
            this is where the current semester could go
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Scheduling;