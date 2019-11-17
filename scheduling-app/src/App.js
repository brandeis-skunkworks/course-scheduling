import React from 'react';
import './App.css';
import blocks from './blocks.png'

var currentPage; //allows for functions to call updateDisplay

/**
 * Init currentPage and build return site
 */
function App() {
  currentPage = new SchedulingPage;
  return currentPage
}

/**
 * Course Scheduling Web-App
 */
class SchedulingPage extends React.Component{
  constructor(props) {
    super(props);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.state = {
      currentDisplay: <Display id="test id" name="test name"/>
    }
  }
  
  render() {
    return (
      <div className="app">
        <div class="row">
          <div class="col-lg-2 col-md-0 col-sm-0 menu-bar align-items-end">
            <Navigation/>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6">
            <BlockSystem/>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6">
            <CourseSelection
              displayId={this.state.currentDisplay}
            />
          </div>
        </div>
      </div>
    );
  }

  updateDisplay(newDisplay) {
    this.setState(state => ({
      currentDisplay: newDisplay
    }));
  }
}

/**
 * Webpage navigation bar
 * @param {*} props 
 */
function Navigation(props) {
  function SideButton(props) {
    return (
      <button id={props.name}
        class="btn-light sidebar-button"
        onClick = {() =>
          handleClick(props)
        }
      >{props.name}</button>
    );
  }
  
  function handleClick(props) {
    document.querySelectorAll('.sidebar-button').forEach(button => {
      button.classList.remove('button-clicked');
    });
    document.getElementById(props.name).classList.add('button-clicked');
  }

  return (
    <div>
      <h3>Course Scheduling Platform</h3>
      <div></div>
      <SideButton name="Academic Info"/> <div/>
      <SideButton name="Teacher's Req"/> <div/>
      <SideButton name="Manual Scheduling"/> <div/>
      <SideButton name="Automatic Scheduling"/> <div/>
      <SideButton name="Contact"/> <div/>
      <SideButton name="Export to CSV"/>
    </div>
  );
}

/**
 * Placeholder for visual block scheduler
 * @param {*} props 
 */
function BlockSystem(props) {
  return (
    <div>
      <h2>Block System</h2>
      <img src={blocks} class="img-fluid" alt="Responsive image"/>
    </div>
  );
  
}

/**
 * Course Selection Navigation bar
 * note: unfixed issue when id, name are null
 * @param {*} props 
 */
function CourseSelection(props) {
  return (
    <div>
      <div class="row-6">
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
            <CourseCard id="201COSI-11A-2" name="Programming in Java"/>
            <CourseCard id="201COSI-29A-2" name="Discrete Structures"/>
            <CourseCard id="201COSI-118a-2" name= "Computer-Supported Cooperation"/>
          </div>
        </div>
      <div class="row-4 display col-md-offset-3">
        {props.displayId}
      </div>
    </div>
  );
}

/**
 * Individual course button
 * @param {*} props 
 */
function CourseCard(props) {
  function handleClick(props) {
    currentPage.updateDisplay(<Display id={props.id} name={props.name}/>);
    document.querySelectorAll('.courseCard').forEach(card => {
      card.classList.remove('card-clicked');
    });
    document.getElementById(props.id).classList.add('card-clicked');
  }

  return (
    <div class="col-4">
      <button id={props.id} class="btn card-btn courseCard" onClick = {() =>
          handleClick(props)
        } >
        <div>
          <h5 class="card-title">{props.id}</h5>
          <h6 class="card-subtitle mb-2">{props.name}</h6>
        </div>
      </button>
    </div>
  );
}

/**
 * Display for the selected course
 * @param {*} props
 */
function Display(props) {
  return (
    <div class="card display">
      <div class="card-body">
        <h2 class="display-title">{props.id}</h2>
        <h6 class="display-subtitle mb-2 text-muted"></h6>
        <p class="card-text" id="description">
          {props.name}
        </p>
        <a href="#" class="card-link">Schedule now</a>
      </div>
    </div>
  );
}

export default App;
