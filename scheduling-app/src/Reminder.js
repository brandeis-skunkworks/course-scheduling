import React from 'react';
import './Admin.css';

/**
 * Admin page to view and send responese
 * //TODO create some kind of listview reading from a database
 */
const Admin = () => {
    function Row(props) {
      return(
        <tr class={props.state}>
          <th scope="row">{props.first}</th>
          <td>{props.last}</td>
          <td>{props.email}</td>
          <td>{props.state == "table-success" ? "view" :
            props.state != "table-danger" ? "": "send reminder"}</td>
        </tr>
      );
    }
    var testElements = [];
    for (var i = 1; i < 100; i++) {
      testElements.push(<Row first="test" last="-"
        email="-" state = {i % 7 == 0 && (i - 1) % 3 == 0 ?
        "table-success" : i % 5 == 0  && (i - 2) % 3 == 0? "table-danger" : ""}></Row>);
    }
    return (
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">First</th>
            <th scope="col col-lg-4 col-md-0 col-sm-0">Last</th>
            <th scope="col col-lg-4 col-md-0 col-sm-0">Email</th>
            <th scope="col col-lg-4 col-md-0 col-sm-0">Response</th>
          </tr>
        </thead>
        <tbody>
          <Row first="Antonella" last="Dilillo"
            email="dilant@brandeis.edu" state="table-success"></Row> 
          <Row first="Olga" last="Papaemmanouil"
            email="papaemmanouil@brandeis.edu"></Row>
          <Row first="Michael" last="Golitsyn" state="table-danger"
            email="golitsyn@brandeis.edu"></Row>
          {testElements}
        </tbody>
      </table>
    );
  }
export default Admin;