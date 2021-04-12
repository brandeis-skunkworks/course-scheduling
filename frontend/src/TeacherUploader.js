import React from 'react';
// import './Admin.css';
import Navigation from './Navigation.js';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

/**
 * TeacherUploader page to view and send responese
 * @param {*} props 
 */
function TeacherUploader(props)  {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [response, setResponse] = useState(true)
  const [professors, setProfessors] = useState([])
  // const [id, setID] = useState(0)

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
        body: JSON.stringify({name: name, email: email})
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
    <div className="app">
      <div class="row">
        <div class="col-lg-2 col-md-0 col-sm-0 menu-bar align-items-end">
          <div>
            <Navigation />
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-6">
          <form onSubmit={handleSubmit}>
            <label>
              <center>New Teacher Input Form:</center><br />  
              Name: <input type="text" value={name} name="name" onChange={e => setName(e.target.value)} /> <br />
              Email: <input type="text" value={email} name="email" onChange={e => setEmail(e.target.value)} /> <br />
              Courses Assigned (separated by semicolons, only one space in each course name between the department name and the course code e.g.: "COSI 011A", uppercase letters only): <input type="text" value={''} name="name"  /> <br />
              Blocks Available (separated by semicolons, no spaces, uppercase letters only): <input type="text" value={''} name="name" /> <br />
              Assigned Blocks: <input type="text" value={''} name="name"  /> <br />
              {/* */}
              {/* Responded: <input type="boolean" value={} name="response"  /> <br></br> */}
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-6">
          <center>Current list of teachers:</center>
          <br></br>
          {professors.map(professor => <div>Name: {professor.name}, Email: {professor.email}, ID: {professor.id} <form onSubmit={(event) => handleDelete(event, professor.id)} > <input type="submit" value="Delete" /> </form></div>)}
        </div>
      </div>
    </div>
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