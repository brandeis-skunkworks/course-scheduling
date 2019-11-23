import React from 'react';
import './App.css';
import Main from './Main.js';

var currentPage; //allows for functions to call updateDisplay

/**
 * Init currentPage and build return site
 */
function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}



export default App;
