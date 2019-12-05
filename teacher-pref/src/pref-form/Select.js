import React from 'react';

function Select(props) {
    return (
      <div className="form-group">
        <label for={props.name}> {props.title} </label>
        <select
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
          className="form-control custom-select"
        >
          <option selected>
            {props.placeholder}
          </option>
          {props.options.map(option => {
            return (
              <option value={option.id} label={option.value}>
                {option.value}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

export default Select;