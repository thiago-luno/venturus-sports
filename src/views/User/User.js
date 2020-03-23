import React, { Component } from 'react'

import InfoBar from '../../components/InfoBar/InforBar';
import Search from '../../components/Search/Search';
import Table from './Table';
import TitleSection from '../../components/TitleSection/TitleSection';

import 'react-toastify/dist/ReactToastify.min.css'; 
import './User.scss';
import Register from '../Register/Register';


class User extends Component {

    render() {
        return (
            <div>
                <InfoBar />

                <div className="container-fluid">
                    <div className="content-header">
                        <TitleSection title="Users" />
                        <Search query={this.props.query} change={this.props.change} placeholder="Pesquisar por nome" />
                    </div>
                    <Table users={this.props.users} order={this.props.order} query={this.props.query} removeUser = { this.props.removeUser } />
                </div>
      
            </div>
        )
    }
}

export default User
