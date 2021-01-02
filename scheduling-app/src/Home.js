import React from 'react';
import blocks from './blocks.png';
import './Scheduling.css';
import { Switch, Route, Link } from 'react-router-dom';
import './Reminder';

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

/**
 * Webpage navigation bar
 * @param {*} props 
 */
function Navigation(props) {
  function SideButton(props) {
    function handleClick(props) {
      document.querySelectorAll('.sidebar-button').forEach(button => {
        button.classList.remove('button-clicked');
      });
      document.getElementById(props.name).classList.add('button-clicked');
    }
    return (
      //TODO link causes the buttons to not highlight
      <Link to={props.link}>
        <button id={props.name} class="btn-light sidebar-button"
          onClick={() => handleClick(props)}>{props.name}
        </button>
      </Link>
    );
  }

  return (
    <div>
      <h3><SideButton name="Course Scheduling Platform" link="/"/> <div /></h3>
      <SideButton name="Academic Info" /> <div />
      <SideButton name="Teacher's Req" /> <div />
      <SideButton name="Manual Scheduling" link="/scheduling"/> <div />
      <SideButton name="Automatic Scheduling" /> <div />
      <SideButton name="Contact" /> <div />
      <SideButton name="Export to CSV" /> <div />
      <SideButton name="Teacher Reminder" link="/reminder" />
    </div>
  );
}

export default Scheduling;