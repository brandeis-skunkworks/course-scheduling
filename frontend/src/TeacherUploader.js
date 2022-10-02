import React from 'react';
// import './Admin.css';
import Navigation from './components/navigation/Navigation.js';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

/**
 * TeacherUploader page to view and send responese
 * @param {*} props 
 */
function TeacherUploader(props)  {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [hasResponded, setResponseStatus] = useState('')
  const [coursesAssigned, setCourses] = useState('')
  const [blocksAvailable, setBlocksAvailable] = useState('')
  const [blocksAssigned, setBlocksAssigned] = useState('')
  const [requirements, setRequirements] = useState('')
  const [professors, setProfessors] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/professor'
    ).then(response=>response.json()
    ).then(data=>{ 
      setProfessors(data)
    });
  }, [])

  const handleSubmit = (event) => {
    alert('Professor ' + name + ' was submitted');

    fetch('http://localhost:1337/professor', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify({name: name, email: email, hasResponded: hasResponded, coursesAssigned: coursesAssigned, blocksAvailable: blocksAvailable, blocksAssigned: blocksAssigned, requirements: requirements})
      }).then(function(response) {
        // return response.json();
      }).then(fetch('http://localhost:1337/professor'
      ).then(response=>response.json()
      ).then(data=>{ 
        setProfessors(data)
        console.log(data)
      }
      ));

    event.preventDefault();
  }

  const handleDelete = (event, id) => {

    fetch('http://localhost:1337/professor/' + id, {
        method: 'DELETE',
      }).then(fetch('http://localhost:1337/professor'
      ).then(response=>response.json()
      ).then(data=>{ 
        setProfessors(data)
        console.log(data)
      }
      )).then(alert('Professor ' + id + ' was deleted'));

    //event.preventDefault();
  }

  function handleClick(props) {
    console.log(props);
  }

  return (
    <span>
      <div class="col-lg-5 col-md-6 col-sm-6">
        <form onSubmit={handleSubmit}>
          <label>
            <center>New Professor Input Form:</center><br />  
            Name: <input type="text" value={name} name="name" onChange={e => setName(e.target.value)} /> <br />
            Email: <input type="text" value={email} name="email" onChange={e => setEmail(e.target.value)} /> <br />
            Responded: (write only "true" or "false", without quotes):<input type="text" value={hasResponded} name="response" onChange={e => setResponseStatus(e.target.value)} /> <br></br>
            Courses Assigned (separated by semicolons, only one space in each course name between the department name and the course code e.g.: "COSI 011A", uppercase letters only): <input type="text" value={coursesAssigned} name="coursesAssigned" onChange={e => setCourses(e.target.value)} /> <br />
            Blocks Available (separated by semicolons, no spaces, uppercase letters only): <input type="text" value={blocksAvailable} onChange={e => setBlocksAvailable(e.target.value)} name="blocksAvailable" /> <br />
            Assigned Blocks: <input type="text" value={blocksAssigned}  name="assignedBlocks" onChange={e => setBlocksAssigned(e.target.value)} /> <br /> 
            Requirements: <input type="text" value={requirements}  name="requirements" onChange={e => setRequirements(e.target.value)} /> <br /> 
          </label>
          <input type="submit" value="Submit New Professor" />
        </form>
      </div>
      <div class="col-lg-5 col-md-6 col-sm-6">
        <center>Current list of professors:</center>
        <br></br>
        {professors.map(professor => <div>Name: {professor.name}, Email: {professor.email}, ID: {professor.id}, Has Responded: {professor.hasResponded}, coursesAssigned: {professor.coursesAssigned}, blocksAvailable: {professor.blocksAvailable}, blocksAssigned: {professor.blocksAssigned}, requirements: {professor.requirements} <form onSubmit={(event) => handleDelete(event, professor.id)} > <input type="submit" value={"Delete Professor " + professor.name} /> </form></div>)}
      </div>
    </span>
  )
}
// class TeacherUploader extends React.Component {
//   constructor(props) {
//     super(props);
//     test = {};
//     this.state = { name: '', email: '', professors: {}};
//   }

//   handleChange = (event) => {
//     this.setState({[event.target.name]: event.target.value});
//   }

//   handleSubmit = (event) => {
//     alert('Professor ' + this.state.name + ' was submitted');

//     fetch('http://localhost:1337/professor', {
//         method: 'POST',
//         // We convert the React state to JSON and send it as the POST body
//         body: JSON.stringify(this.state)
//       }).then(function(response) {
//         console.log(response)
//         return response.json();
//       });

//     fetch('http://localhost:1337/professor', {
//         method: 'GET'
//       }).then(function(response) {
//         console.log("aaaa")
//         console.log(response)
//         test = response.json();
//         // this.setState({professors: response.json()})
//         return null;
//       });

//     event.preventDefault();
// }

//   render() {
//     return (
//       <div className="app">
//         <div class="row">
//           <div class="col-lg-2 col-md-0 col-sm-0 menu-bar align-items-end">
//             <Navigation />
//           </div>
//           <div class="col-lg-5 col-md-6 col-sm-6">
//             <form onSubmit={this.handleSubmit}>
//               <label>
//                 Name: <input type="text" value={this.state.value} name="name" onChange={this.handleChange} /> <br></br>
//                 Email: <input type="text" value={this.state.value} name="email" onChange={this.handleChange} /> <br></br>
//                 Courses Assigned (separated by semicolons, only one space in each course name between the department name and the course code e.g.: "COSI 011A", uppercase letters only): <input type="text" value={this.state.value} name="name" onChange={this.handleChange} /> <br></br>
//                 Blocks Available (separated by semicolons, no spaces, uppercase letters only): <input type="text" value={this.state.value} name="name" onChange={this.handleChange} /> <br></br>
//                 Assigned Blocks: <input type="text" value={this.state.value} name="name" onChange={this.handleChange} /> <br></br>
//               </label>
//               <input type="submit" value="Submit" />
//             </form>
//           </div>
//           <div class="col-lg-5 col-md-6 col-sm-6">
//             Current list of teachers goes here
//             <br></br>
//             {/* {test.map(element => <div>{element}</div>)} */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const TeacherUploader = () => {
//     return (
//       <div className="app">
//         <div class="row">
//           <div class="col-lg-2 col-md-0 col-sm-0 menu-bar align-items-end">
//             <Navigation />
//           </div>
//           <div class="col-lg-5 col-md-6 col-sm-6">
//             <form onSubmit={this.handleSubmit}>
//               <label>
//                 Name: <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
//               </label>
//               <input type="submit" value="Submit" />
//             </form>
//           </div>
//           <div class="col-lg-5 col-md-6 col-sm-6">
            
//           </div>
//         </div>
//       </div>
//     );
//   }
export default TeacherUploader;