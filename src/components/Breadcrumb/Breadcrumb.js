import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Breadcrumb.scss';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const Breadcrumb = () => <Route path="*" render={props => {
    let parts = props.location.pathname.split("/");
    const place = parts[parts.length-1];
    parts = parts.slice(1, parts.length-1);
    return  (
        <div className="breadcrumb-content">
              <div className="container-fluid">
              <Link to="/"><FontAwesomeIcon icon={ faHome } style={{color: '#1abc9c', marginRight: '10px'}}/></Link>
              <span className="breadcrumb-item"> {parts.map(crumb)} {place}</span>
              </div>
        </div>
        )

    }} />

const crumb = (part, partIndex, parts) => {
        const path = ['', ...parts.slice(0, partIndex+1)].join("/");
        return <Link key={path} to={path} >{part}</Link>}
        
export default Breadcrumb;

