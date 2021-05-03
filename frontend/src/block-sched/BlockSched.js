import React from 'react';
import './BlockSched.css';
import blocks from './blocks.js';

import {connect} from 'react-redux';
import {chosenCourse, removeChosenCourse, addChosenCourse, deleteChosenCourse} from '../redux/actions';

class TimeBlockBoard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        blocks: blocks
      }
    }

    handleClick(course) {
      if (course.id in this.props.value) {
        return (course) => {
          Object.entries(this.props.chosen_courses).map(arr => arr[1]).forEach(val => this.props.deleteChosenCourse(val.id));
          this.props.addChosenCourse(course);
        }
      }
      if (course.id in this.props.chosen_courses) {
        return (course) => {
          this.props.deleteChosenCourse(course.id);
          this.props.removeChosenCourse();
        }
      } else {
        return (course) => {
          Object.entries(this.props.chosen_courses).map(arr => arr[1]).forEach(val => {
            if (val.id in this.props.value) {
              this.props.deleteChosenCourse(val.id);
            }
          });
          this.props.chosenCourse(course);
          this.props.addChosenCourse(course);
        }
      }
    }
  
    renderTimeBlock() {
      const blocks = this.state.blocks.map((block) => 
        <TimeBlock block={block} chosen_courses={this.props.chosen_courses} review={this.props.review} handleClick={this.handleClick(block)} value={this.props.value}/>
      );
  
      return (
        <div className="blocks_list container">
          <div className="row justify-content-between">
            {blocks.slice(0, 5)}
          </div>
          <div className="row justify-content-between">
            {blocks.slice(5, 10)}
          </div>
          <div className="row justify-content-between">
            {blocks.slice(10, 15)}
          </div>
          <div className="row justify-content-between">
            {blocks.slice(15, 20)}
          </div>
          <div className="row justify-content-between">
            {blocks.slice(20, 25)}
          </div>
          <div className="row justify-content-between">
            {blocks.slice(25, 30)}
          </div>
          <div className="row justify-content-between">
            {blocks.slice(30, blocks.length - 1)}
          </div>
        </div>
      );
    }

    render() {
      return (
        <div className="pref_block">
          {this.renderTimeBlock()}
        </div>
      );
    }
  }
  
function TimeBlock(props) { 
    let classBtn = "btn btn-light btn-lg block_btn";
    const id = props.block.id;
    
    if (id in props.value) {
      const pref = props.value[id];

      switch (pref.preference) {
        case "0": 
          classBtn = "btn btn-danger btn-lg block_btn"
          break;
        case "1":
        case "2":
        case "3":
          classBtn = "btn btn-warning btn-lg block_btn"
          break;

        case "4":
          classBtn = "btn btn-dark btn-lg block_btn"
          break;

        default: 
          classBtn = "btn btn-light btn-lg block_btn";
      }
    } else if (!props.review && (id in props.chosen_courses)) {
      classBtn = "btn btn-secondary btn-lg block_btn"
    }
  
    return (
      <div>
        <button id={id} className={classBtn} onClick={() => props.handleClick(props.block)}>
          <div className="block_info">
            <h5 className="card-title block_name"><b>{props.block.name}</b></h5>
            <p className="card-subtitle block_freq">{props.block.freq}<br/></p>
            <p className="card-subtitle block_time">{props.block.time}</p>
          </div>
        </button>
      </div>
    );
}

const mapStateToProps = state => ({
    chosen: state.chosen,
    chosen_courses: state.chosen_courses,
    value: state.value,
    review: state.review,
});

const mapDispatchToProps = (dispatch) => {
  return {
    chosenCourse: (chosen) => { dispatch(chosenCourse(chosen)) } ,
    removeChosenCourse: () => { dispatch(removeChosenCourse()) },
    addChosenCourse: (chosen) => { dispatch(addChosenCourse(chosen)) },
    deleteChosenCourse: (id) => { dispatch(deleteChosenCourse(id)) },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (TimeBlockBoard);


