// import React, {Component} from 'react';
import React, { useState, useEffect } from 'react';
// import React from 'react';
import './App.css';
import Main from './Main.js';

var currentPage; //allows for functions to call updateDisplay

/**
 * Init currentPage and build return site
 */

function App(props) {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
