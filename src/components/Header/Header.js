import React from 'react';
import './Header.scss';
import UserMenu from '../UserMenu/UserMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header container-fluid">
        <Link to="/" className="content-brand">
            <div className="brand">
                <div className="brand--outline brand--bg-color">
                    <FontAwesomeIcon icon={ faQuestion } /> 
                </div>
            </div>
            <h1 className="brand__text">Venturus Sports</h1>
        </Link>
        
        <ul className="navbar">
            <li className="navbar__item">
                <Link to="/" className="navbar__link">Home</Link>
            </li>
            <li className="navbar__item">
                <Link to="/user/new" className="navbar__link">Register</Link>
            </li>
        </ul>

        <UserMenu />

    </header>

)

export default Header;