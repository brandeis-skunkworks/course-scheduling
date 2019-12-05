import React from 'react';
import './App.css';
import ModalBlock from './modal-block/Modal'
import TimeBlockBoard from './block-sched/BlockSched'
import MainSection from './main/MainSection'

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col_1 col-xl-2 col-lg-2 col-md-0 col-sm-0 menu-bar align-items-end">
          <Header />
        </div>
        <div className="col_2 col-xl-4 col-lg-4 col-md-5 col-sm-5">
          <MainSection />
        </div>
        <div className="col_3 col-xl-6 col-lg-6 col-md-7 col-sm-7">
          <div className="time_block_container">
            <ModalBlock />
            <TimeBlockBoard />
          </div>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className="app_header">
      <p>This is the header</p>
    </div>
  );
}

export default App;