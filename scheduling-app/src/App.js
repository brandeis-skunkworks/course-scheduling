import React from 'react';
import './App.css';
import blocks from './blocks.png'

function App() {
  return (
    <div className="app">
      <div class="row">
        <div class="col-lg-2 col-md-0 col-sm-0 menu-bar align-items-end">
          <h3>Course Scheduling Platform</h3>
          <div></div>
          <button class="btn-light sidebar-button">Academic Info</button> <div/>
          <button class="btn-light sidebar-button">Teacher's Req</button> <div/>
          <button class="btn-light sidebar-button">Manual Scheduling</button> <div/>
          <button class="btn-light sidebar-button">Automatic Scheduling</button> <div/>
          <button class="btn-light sidebar-button">Contact</button>
          <button class="btn-light sidebar-button">Export to CSV</button>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-6">
          <h2>Block System</h2>
          <img src={blocks} class="img-fluid" alt="Responsive image"/>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-6">
          <div class="row-6">
            <CourseSelection/>
          </div>
          <div class="row-4 display col-md-offset-3">
            <Display/>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseSelection(props) {
  return (
    <div>
      <h2 id="courses-head">Courses</h2>
      <div class="row">
        <CourseCard id="201COSI-11A-1" name="Programming in Java"/>
        <CourseCard id="201COSI-29A-1" name="Discrete Structures"/>
        <CourseCard id="201COSI-118a-1" name= "Computer-Supported Cooperation"/>
      </div>
      <div class="row">
        <CourseCard id="201COSI-21A-1" name="Data Structures and the Fundamentals of Computing"/>
        <CourseCard id="201COSI-139B-1" name="Technology and the Learning Sciences"/>
        <CourseCard id="201COSI-12B-2" name="Advanced Programming Techniques"/>
      </div>
      <div class="row">
        <CourseCard id="" name=""/>
        <CourseCard id="" name=""/>
        <CourseCard id="" name=""/>
      </div>
    </div>
  );
}

function CourseCard(props) {
  return (
    <div class="col-4 course-card">
      <button class="btn card-btn" onClick= {Display(props.id, props.name)}>
        <card>
          <div>
            <h5 class="card-title">{props.id}</h5>
            <h6 class="card-subtitle mb-2">{props.name}</h6>
          </div>
        </card>
      </button>
    </div>
  );
}
function Display(id, name) {
  return(
    <div class="card display">
      <div class="card-body">
        <h2 class="display-title">Course Information</h2>
        <h6 class="display-subtitle mb-2 text-muted">COSI 11A, Section 1</h6>
        <p class="card-text" id="description">
          Sections:2<br/>
          Pre-requisites:<br/>
          Instructor: Antonella Dilillo, email:
          <br/>Instructor Requirements:
        </p>
        <a href="#" class="card-link">Schedule now</a>
      </div>
    </div>
  );
}

/*
function Display(props) {
  return(
    <div class="card display">
      <div class="card-body">
        <h2 class="display-title">Course Information</h2>
        <h6 class="display-subtitle mb-2 text-muted">COSI 11A, Section 1</h6>
        <p class="card-text" id="description">
          Sections:2<br/>
          Pre-requisites:<br/>
          Instructor: Antonella Dilillo, email:
          <br/>Instructor Requirements:
        </p>
        <a href="#" class="card-link">Schedule now</a>
      </div>
    </div>
  );
}
*/

export default App;
