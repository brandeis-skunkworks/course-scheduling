import { Link } from 'react-router-dom';
import React from 'react';

export default function SideButton(props) {

    let handleClick = (props) => {
        document.querySelectorAll('.sidebar-button').forEach(button => {
            button.classList.remove('button-clicked');
        });
        document.getElementById(props.name).classList.add('button-clicked');
    }

    return (
        //TODO link causes the buttons to not highlight
        <Link to={props.link}>
            <button id={props.name} className="btn-light sidebar-button" onClick={() => handleClick(props)}>
                {props.name}
            </button>
        </Link>
    );
}