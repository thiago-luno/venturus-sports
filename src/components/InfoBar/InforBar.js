import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapSigns, faTrophy, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import './InfoBar.scss';
const InfoBar = () => (

    <section className="info-bar">
        <div className="container-fluid">
            <ul className="info-bar__list">
                <li className="info-bar__item">

                    <div className="info-bar__icon">
                        <FontAwesomeIcon icon={ faPuzzlePiece } size="3x"/>
                    </div> 

                    <div className="info-bar__text">
                        <span className="info-bar__text--small">Sport type</span>
                        <span className="info-bar__text--big">Cycling</span>
                    </div>
                </li>

                <li className="info-bar__item">
                    <div className="info-bar__icon">
                        <FontAwesomeIcon icon={ faTrophy } size="3x" /> 
                    </div>

                    <div className="info-bar__text">
                        <span className="info-bar__text--small">Sport type</span>
                        <span className="info-bar__text--big">Advanced</span>
                    </div>
                </li>

                <li className="info-bar__item">
                    <div className="info-bar__icon">
                        <FontAwesomeIcon icon={ faMapSigns } size="3x" /> 
                    </div>

                    <div className="info-bar__text">
                        <span className="info-bar__text--small">Sport type</span>
                        <span className="info-bar__text--big">30 miles</span>
                    </div>
                </li>

            </ul>
        </div>
    </section>

)

export default InfoBar;