import React from 'react';

function TextArea(props) {
    return (
      <div className="form-group">
    <label className="form-label">{props.title}</label>
      <textarea
      className="form-control"
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      />
    </div>
    );
  }

export default TextArea;