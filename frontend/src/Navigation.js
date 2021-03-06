import React from 'react';
import { Link } from 'react-router-dom';

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
          <button id={props.name} class="btn-light sidebar-button" onClick={() => handleClick(props)}>
            {props.name}
          </button>
        </Link>
      );
    }
  
    return (
      <div>
        <h3><SideButton name="Course Scheduling Platform" link="/"/> <div /></h3>
        <SideButton name="Academic Info" link="/academic-info" /> <div />
        <SideButton name="Professor Info Uploading" link="/teacher-uploader" />
        <SideButton name="Professor's Requirements" link="/teacher-requirements"/> <div />
        <SideButton name="Professor Reminder" link="/teacher-reminder" />
        <SideButton name="Manual Scheduling" link="/scheduling"/> <div />
        <SideButton name="Automatic Scheduling (not implemented)" /> <div />
        <SideButton name="About" link="/about" /> <div />
      </div>
    );
  }

  export default Navigation;