import React from 'react';
import './Card.scss';

const Card = ({ title, text, icon }) => {
    return (
        <div className="card-dash">
            <h3 className="card-dash__title">{ title }</h3>
            
            <div className="card-dash__content">
                <i className={ icon }></i>
                <p className="text">{ text }</p>
            </div>

        </div>
    )
}

export default Card
