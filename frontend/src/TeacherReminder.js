
import React from 'react';
import './Admin.css';
import Navigation from './Navigation.js';
import Row from './Row.js';

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
    });
  }, [])
    
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
            {professors.map(professor => <Row name={professor.name} email={professor.email} status={professor.hasResponded == "true" ? "table-success" : "table-danger"} id={professor.id}></Row>)}
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