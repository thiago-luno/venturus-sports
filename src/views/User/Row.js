import React, { Component } from 'react'

export class Row extends Component {
  
    render() {
        const { user, removeUser, index } = this.props;
        
        return (
            <tr key={index}>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td><a href="/" className="link-table">{user.email}</a></td>
                <td><a href="/" className="link-table">{user.city}</a></td>
                <td>{user.rideInGroup}</td>
                <td className="text-transform-capitalize">{user.daysOfTheWeek}</td>
                <td><a href="/" className="link-table">{user.posts}</a></td>
                <td><a href="/" className="link-table">{user.albums}</a></td>
                <td>{user.photos}</td>
                <td>
                    <button className="waves-effect waves-light btn icon-delete" onClick={() => removeUser(index)}><i className="far fa-trash-alt"></i></button>
                </td>
                   
                
            </tr>
        )
    }
}

export default Row
