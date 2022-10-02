import React, { Component } from "react";
//import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TeacherForms from "./components/TeacherForm";
import CourseList from "./components/CourseList";
import { Col, Row, Container, Navbar, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as courseAction from "./actions/courseAction";
import DynamicForm from "./components/DynamicForm";

// function ProfessorLoader(props) {
//   const [professors, setProfessors] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:1337/professor")
//       .then((response) => response.json())
//       .then((data) => {
//         setProfessors(data);
//         console.log(data);
//       });
//   }, []);
// }

let courses = [];
let DataPage = ({ match, location }) => {
  let {
    params: { dataId },
  } = match;
  return (
    <>
      <p>
        <strong> Match Props: </strong>

        <code> {JSON.stringify(match, null, 2)}</code>
      </p>
      <p>
        <strong> Location Props: </strong>

        <code>{JSON.stringify(location, null, 2)}</code>
      </p>
    </>
  );
};

let CoursePage = ({ match, location }) => {
  let {
    params: { courseId },
  } = match;
  return (
    <>
      {/* <p>
        <strong> Match Props: </strong>
        {courseId}
        <code> {JSON.stringify(match, null, 2)}</code>
      </p>
      <p>
        <strong> Location Props: </strong>
        {courses[courseId - 1].name}
        <code>{JSON.stringify(location, null, 2)}</code>
      </p> */}
    </>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.DataPage = this.DataPage.bind(this);
    this.state = {
      name: "",
    };
    // ProfessorLoader();
    // this.courses = [];
    // fetch("http://localhost:1337/course")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.courses = data;
    //     console.log(this.courses);
    //   });
  }

  // componentDidMount() {
  //   fetch("http://localhost:1337/course")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.courses = data;
  //       console.log(this.courses);
  //     });
  // }

  DataPage = ({ match, location }) => {
    let {
      params: { dataId },
    } = match;
    return (
      <>
        <p>
          <strong> Match Props: </strong>
          {dataId}
          <code> {JSON.stringify(match, null, 2)}</code>
        </p>
        <p>
          <strong> Location Props: </strong>

          <code>{JSON.stringify(location, null, 2)}</code>
        </p>
        <TeacherForms />
      </>
    );
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let course = {
      name: this.state.name,
    };
    this.setState({
      name: "",
    });
    if (course.name == "") {
      window.alert("Please enter a course name.");
    } else {
      this.props.addCourse(course);
    }

    // console.log(course);
    this.props.submitCourseToBackend();
  };

  handleClick = (e, data) => {
    e.preventDefault();
  };

  listView = (data, index) => {
    return (
      <div className="row">
        <div className="col-md-10">
          <h5 key={index}>
            <Link to={`/data/${index + 1}`}>
              <Button className="text-left " variant="light" block>
                {data.name}
              </Button>
            </Link>
          </h5>
        </div>
        <div className="col-md-2">
          <Button
            onClick={(e) => {
              if (window.confirm("Are you sure you want to delete this item?"))
                this.deleteCourse(e, index, data);
            }}
            className="btn btn-danger"
          >
            Remove
          </Button>
        </div>
      </div>
    );
  };

  deleteCourse = (e, index, course) => {
    e.preventDefault();
    this.props.deleteCourse(index);
    this.props.deleteCourseOnBackend(course.name);
  };

  deleteAllCoursesOnBackend = (e) => {
    e.preventDefault();
    this.props.deleteAllCoursesOnBackend();
  };

  render() {
    let name;
    return (
      <div className="full-page">
        {/* <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Brandeis Course Scheduling</Navbar.Brand>
        </Navbar> */}
        <Router>
          <Row>
            <Col>
              <h1> Academic Requirements Form </h1>
              <hr />
              <div>
                Add Course
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    className="form-control"
                    value={this.state.name}
                  />
                  <br />
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="ADD"
                  />
                </form>
                <Button
                  onClick={(e) => {
                    this.deleteAllCoursesOnBackend(e);
                  }}
                >
                  DELETE ALL
                </Button>
                <hr />
              </div>
              <div>
                <nav>
                  Click on the course name to edit it
                  <ul>
                    {courses.map((course, index) => (
                      <h5 key={index}>
                        <li>
                          <Link to={`/course/${index + 1}`}>
                            {course.name}'s Form
                          </Link>
                        </li>
                      </h5>
                    ))}

                    {this.props.courses.map((course, i) =>
                      this.listView(course, i)
                    )}

                    {/* {this.courses.map((course, index) => (
                      <p>{course.name}</p>
                    ))} */}
                  </ul>
                </nav>
              </div>
            </Col>
            <Col>
              <Switch>
                <Route path="/data/:dataId" component={this.DataPage} />
                <Route path="/course/:courseId" component={CoursePage} />
              </Switch>
            </Col>
          </Row>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCourse: (course) => dispatch(courseAction.addCourse(course)),
    deleteCourse: (index) => dispatch(courseAction.deleteCourse(index)),
    submitCourseToBackend: () => dispatch(courseAction.submitCourseToBackend()),
    deleteCourseOnBackend: (index) =>
      dispatch(courseAction.deleteCourseOnBackend(index)),
    deleteAllCoursesOnBackend: () =>
      dispatch(courseAction.deleteAllCoursesOnBackend()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
