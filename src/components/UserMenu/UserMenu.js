import React, { Fragment, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './UserMenu.scss';

class UserMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showDropdown: false
        }

    }

    toggleDropdown = () => this.setState({ showDropdown: !this.state.showDropdown })

    closeDropdown = (e) => {
        if (e.keyCode === 27) 
            this.setState({ showDropdown: false })
    }

    render() {


        return (

            <Fragment>
                <nav className="user-menu" onClick={this.toggleDropdown} onKeyDown={this.closeDropdown}  tabIndex="0">
                    <span className="avatar">JB</span>
                    <span>Json Bourne</span>
                    <FontAwesomeIcon icon={faAngleDown} style={{ fontWeight: 'bold' }} />

                    {this.state.showDropdown&&
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/">Friends List</a>
                        <a className="dropdown-item" href="/">Saved Items</a>
                        <a className="dropdown-item" href="/">Notifications</a>
                        <a className="dropdown-item" href="/">User Preferences</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">Log out</a>
                    </div>}
                </nav>
            </Fragment>
        )
    }
}

export default UserMenu;