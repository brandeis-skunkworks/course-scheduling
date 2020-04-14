import React, { Component } from 'react'
import { Button, Col, Row, Container, Form } from  'react-bootstrap'
import { connect } from 'react-redux';
import * as courseAction from '.././actions/courseAction';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class CourseList extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
          name: ''
        }
    }
      
    handleChange = (e) => {
        this.setState({
          name: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let course = {
          name: this.state.name
        }
        this.setState({
          name: ''
        });
        if (course.name == ''){
          window.alert('Please enter a course name.')
        }else{
          this.props.addCourse(course);
        } 
    }

    handleClick =(e, data)=> {
        e.preventDefault();
        console.log('The link was clicked');
    }
    
    listView = (data, index) => {
        return (
          <div className="row">
            <div className="col-md-10">     
              <Link to="/Home">
                <Button className = "text-left " variant = "light" block 
                    onClick={(e, data) => {
                        if (window.confirm('Would you like to edit the content of this course?'))
                                this.handleClick(e, data)
                    }} > 
                    {data.name}
                </Button>
              </Link>
            </div>
            <div className="col-md-2">
              
                <Button onClick={(e) => {if (window.confirm('Are you sure you want to delete this item?'))
                  this.deleteCourse(e, index)
                }} className="btn btn-danger">
                    Remove
                </Button>
              
            </div>
        </div> 
        )
    }
    
    deleteCourse = (e, index) => {
        e.preventDefault();
        this.props.deleteCourse(index);
    }



    render() {
        return (
            <div>
                <h1> Academic Requirements Form </h1>
                <hr />
                <div>
                <h3>Add Course</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
                    <input type="submit" className="btn btn-success" value="ADD"/>
                </form>
                <hr />
                { <ul className="list-group">
                  <Router>
                  {this.props.courses.map((course, i) => 
                    this.listView(course, i))}
                  </Router>
                </ul> }
                </div>
            </div>
        )
    }

    
}

const mapStateToProps = (state, ownProps) => {
  return{
    courses: state.courses
  }
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    addCourse: course => dispatch(courseAction.addCourse(course)),
    deleteCourse: index => dispatch(courseAction.deleteCourse(index))
  }
};
  

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);