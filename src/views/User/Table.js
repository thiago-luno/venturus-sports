import React, { Component } from 'react';
import Thead from './Thead';
import Row from './Row';
import './Table.scss';

class Table extends Component {

    render() {

        let rows = [];
        const { users, order, removeUser } = this.props;

        users.forEach( (user, index) => {
            if(user.name.toUpperCase().indexOf(this.props.query.toUpperCase()) === -1) 
                return;
            
            rows.push(
                <Row user = { user } key={ index } index={ index } removeUser={ removeUser } />
            )
        });

        return (
            <table className="table table-borderless table-striped table-hover mx-auto w-auto">
                <Thead order = { order }/>

                <tbody>{ rows }</tbody>
            </table>
        )
    }
}

export default Table
