// import React, {Component} from 'react';
import React, {useState, useEffect} from 'react';
// import React from 'react';
import './App.css';
import Main from './Main.js';

var currentPage; //allows for functions to call updateDisplay

/**
 * Init currentPage and build return site
 */

function App(props) {
  const [state, setState] = useState('');

    // const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then(response => response.text())
      .then(response => {
        setState(response) // new
      })
  }, []);

  return (
    <div className="App">
      new {state}
      <Main />
    </div>
  );
}

//   constructor(props) {
  //     super(props);
  //     this.state = { apiResponse: "" };
//   }
  
//   callAPI() {
//     fetch("http://localhost:9000/testAPI")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse: res }));
//   }
  
//   componentWillMount() {
  //     this.callAPI();
  //   }
  // }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }
  
//   callAPI() {
//     fetch("http://localhost:9000/testAPI")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse: res }));
//   }
  
//   componentDidMount() {
//     this.callAPI();
//   }

//   render () {
//     return (
//       <div className="App">
//         {this.state.apiResponse}
//         <Main />
//       </div>
//     );
//   }
// }



export default App;
