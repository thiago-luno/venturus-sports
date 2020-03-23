import React, { Fragment, Component } from 'react';
import orderBy from 'lodash/orderBy';
import './styles/App.scss';
import User from './views/User/User';
import Register from './views/Register/Register';
import ApiService from './services/ApiService';
import { toast, ToastContainer } from 'react-toastify';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      query: '',
      order: 'desc',
    }
  }

  componentDidMount() {
    ApiService.buildUser().then(users =>
      this.setState({ users })
    )
  }

  onQueryChange = (query) => {
    this.setState({
      query: query,
    })
  }

  order = (column) => {
    const order = this.state.order === 'desc' ? 'asc' : 'desc';

    this.setState({
      users: orderBy(this.state.users, [column], [order]),
      order: order,
    })
  }

  openToast = (index) => {
    toast(
      <div>
        <p>Deseja deletar o usuário?</p>
        <button className="btn btn-success" onClick={() => this.removeUser(index)}>Sim</button>
        <button className="btn btn-secondary">Não</button>
      </div>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
  }

  removeUser = (index) => {
    this.setState(
      { users: this.state.users.filter((item, pos) => index !== pos), delete: false }
    )
  }

  submitListener = user => {
    this.setState(
      { users: [...this.state.users, user] }
    )
  }

  render() {
    return (

      <Fragment>
        <User
          users={this.state.users}
          order={this.order}
          query={this.state.query}
          removeUser={this.openToast}
          change={this.onQueryChange} 
          submitListener={this.submitListener}/>

        <ToastContainer />
        <Register submitListener={this.submitListener}/>
      </Fragment>
    );
  }
}

export default App;