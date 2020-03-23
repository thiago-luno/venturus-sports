import React, { Component } from 'react'

export class Thead extends Component {
    render() {
        
        const { order } = this.props;

        const style = {
            thead : {
                cursor: 'pointer',
                userSelect: 'none'
            }
        }

        return (
            <thead>
                <tr>
                    <th>
                        <span className="valign-wrapper">
                            Username  
                            <i className="fas fa-angle-down valign-wrapper" style={ style.thead } onClick={() => order('username')}></i>
                        </span> 
                    </th>
                    
                    <th>
                        <span className="valign-wrapper">
                            Name 
                            <i className="fas fa-angle-down"  style={ style.thead } onClick={() => order('name')}></i>
                        </span>
                    </th>


                    <th>
                        <span className="valign-wrapper">
                            E-mail 
                            <i className="fas fa-angle-down"  style={ style.thead } onClick={() => order('email')}></i>
                        </span>
                    </th>

                    <th>
                        <span className="valign-wrapper">
                            City 
                            <i className="fas fa-angle-down"  style={ style.thead } onClick={() => order('city')}></i>
                        </span>
                    </th>

                    <th>
                        <span className="valign-wrapper">
                            Ride in group 
                            <i className="fas fa-angle-down"  style={ style.thead } onClick={() => order('rideInGroup')}></i>
                        </span>
                    </th>

                    <th>
                        <span className="valign-wrapper">
                            Day of the week 
                            <i className="fas fa-angle-down"  style={ style.thead } onClick={() => order('daysOfTheWeek')}></i>
                        </span>
                    </th>

                    <th>
                        <span className="valign-wrapper">
                            Posts
                            <i className="fas fa-angle-down"  style={ style.thead } onClick={() => order('posts')}></i>
                        </span>
                    </th>

                    <th>
                        <span className="valign-wrapper">
                            Albums
                            <i className="fas fa-angle-down"  style={ style.thead } onClick={() => order('albums')}></i>
                        </span>
                    </th>

                    <th>
                        <span className="valign-wrapper">
                            Photos
                            <i className="fas fa-angle-down"  style={ style.thead } onClick={() => order('photos')}></i>
                        </span>
                    </th>

                    <th></th>
                </tr>
            </thead>  
        )
    }
}

export default Thead
