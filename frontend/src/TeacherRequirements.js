import React from 'react';
import './App.css';
import ModalBlock from './modal-block/Modal'
import TimeBlockBoard from './block-sched/BlockSched'
import ImageBlockSched from './block-sched/ImageBlockSched'
import MainSection from './main/MainSection'

function TeacherRequirements() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col_2 col-xl-4 col-lg-4 col-md-5 col-sm-5">
          <MainSection />
        </div>
        <div className="col_3 col-xl-6 col-lg-6 col-md-7 col-sm-7">
          <div className="time_block_container">
            <ModalBlock />
            {/* <TimeBlockBoard /> */}
            <ImageBlockSched />
          </div>
        </div>
      </div>
    </div>
  )
}


export default TeacherRequirements;
