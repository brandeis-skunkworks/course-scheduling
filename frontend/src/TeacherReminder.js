
import React from 'react';
import './Admin.css';
import Navigation from './Navigation.js';

import { useState, useEffect } from 'react';

/**
 * TeacherReminder page to view and send responese
 * //TODO create some kind of listview reading from a database
 */ 
const TeacherReminder = () => {
  const [professors, setProfessors] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/professor'
    ).then(response=>response.json()
    ).then(data=>{ 
      setProfessors(data)
      console.log(data)
    });
  }, [])

  class Row extends React.Component{
    constructor(props){
      super(props);
      this.changeState = this.changeState.bind(this);
      this.state = {
        status: props.status,
        name: props.name,
        email: props.email,
      };
    }
    click(){
      console.log("This is where the shell command used to send emails will be executed");
    }

    changeState(){
      if(this.state.status == "table-success"){
        this.setState({status: "table-danger"});
      }else{
        this.setState({status: "table-success"});
      }
    }

    render(){
      return(
        <tr class={this.state.status}>
          <th scope="row">{this.state.name}</th>
          <td>{this.state.email}</td>
          <td>
            {this.state.status == "table-success" ? "Has Responded" :
            this.state.status != "table-danger" ? "": "Has Not Responded Yet"}
          </td>
          <td>
            <button onClick={this.click}>Send</button>
            <button onClick={this.changeState}>Toggle Response Status</button>
          </td>
        </tr>
      )
    }
  }

  // function Row(props) {
  //   return(
  //     <tr class={props.state}>
  //       <th scope="row">{props.name}</th>
  //       <td>{props.last}</td>
  //       <td>{props.email}</td>
  //       <td>{props.state == "table-success" ? "view" :
  //         props.state != "table-danger" ? "": "send reminder"}</td>
  //     </tr>
  //   );
  // }
    
  return (
    <div className="app">
      <div class="row">
        <div class="col-lg-2 col-md-0 col-sm-0 menu-bar align-items-end">
          <Navigation />
        </div>
        <div class="col-lg-5 col-md-6 col-sm-6">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">name</th>
                <th scope="col col-lg-4 col-md-0 col-sm-0">Email</th>
                <th scope="col col-lg-4 col-md-0 col-sm-0">Response</th>
              </tr>
            </thead>
            <tbody>
            {professors.map(professor => <Row name={professor.name} email={professor.email} status={professor.hasResponded == "true" ? "table-success" : "table-danger"}></Row>)}
            </tbody>
          </table>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-6">
          
        </div>
      </div>
    </div>
  );
}

export default TeacherReminder;