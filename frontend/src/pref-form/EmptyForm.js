import React from 'react';
import empty_pic from '../img/touch_hand.jpg';
import './PrefForm.css';

function EmptyForm(props) {
    return (
        <div className="empty_form">
            <img className="empty_img" src={empty_pic} alt="No form chosen"/>
            <p className="info">To begin, click on the corresponding block(s) you would like to declare your preference.</p>
        </div>
    );
}

export default EmptyForm;