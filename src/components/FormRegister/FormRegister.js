import React, { Component } from 'react';
import './FormRegister.scss';
import TextField from '../../components/TextField/TextField';
import RadioButton from '../../components/RadioButton/RadioButton';
import CheckBoxButton from '../../components/CheckBoxButton/CheckBoxButton';
import FormValidator from '../../util/FormValidator';
import { toast, ToastContainer } from 'react-toastify';

export default class FormRegister extends Component {

    constructor(props) {
        super(props);
        this.stateInicial = {
            username: '',
            name: '',
            email: '',
            city: '',
            rideInGroup: '',
            daysOfTheWeek: [],
        }

        this.state = this.stateInicial;

        this.validForm = new FormValidator([
            {
                field: 'username',
                method: 'isEmpty',
                isValidWhen: false,
                message: 'Username is required'
            },

            {
                field: 'rideInGroup',
                method: 'isEmpty',
                isValidWhen: false,
                message: 'Ride in Group is required'
            },
            {
                field: 'name',
                method: 'isEmpty',
                isValidWhen: false,
                message: 'Name is required'
            },

            {
                field: 'email',
                method: 'isEmail',
                isValidWhen: true,
                message: 'Email is required'
            },

        ])
    }

    openToast = (type,message) => {
        toast[type](
            <div>
                <p>{message}</p>
            </div>,
            {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
    }


    inputListener = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    inputListenerCheckBox = event => {
        var checkBox = event.target;
        console.log(' checkBox',  checkBox.checked)
        const value = event.target.value
        let options = this.state.daysOfTheWeek

        if (options.indexOf(value) === -1) options.push(value)
        else options.splice(this.state.daysOfTheWeek.indexOf(value), 1)

        this.setState({ daysOfTheWeek: options })
        console.log('this.state.daysOfTheWeek', this.state.daysOfTheWeek)
    }

    clearState = () => {
        this.setState(this.stateInicial)
        this.setState({ daysOfTheWeek: this.stateInicial.daysOfTheWeek})       
        this.setState({ daysOfTheWeek: []})
    }

    clearForm = () => { 
        let checkbox = document.querySelectorAll('input[type=checkbox]')
        checkbox.forEach(element => {
            element.checked = false;
        });
    }

    submitForm = () => {
        const validation = this.validForm.valid(this.state);

        if(validation.isValid) {
            this.props.submitListener(this.state)
            this.clearForm();
            this.clearState();  

            console.log('this.state', this.state)
        }
        else {
            const { username, name, email, rideInGroup } = validation;
            let field =  [username, name, email, rideInGroup];
            const invalidFields = field.filter(elem => elem.isInvalid?elem.isInvalid: '');
    
            invalidFields.forEach( item => {
                this.openToast('error', item.message);
            })
        }
    }

    render() {
        const { username, name, email, city } = this.state

        return (
            <div className="container-form">
                <form className="content-form row" ref={(el) => this.myFormRef = el}>
                    <div className="col-sm-6 no-padding-left">

                        <TextField
                            type="text"
                            className="form-control"
                            id="username"
                            label="Username"
                            name="username"
                            value={username || ''}
                            onChange={this.inputListener}
                            required={true}
                            instructions="Enter your username" />

                        <TextField
                            type="text"
                            className="form-control"
                            id="name"
                            label="Name"
                            name="name"
                            value={name || ''}
                            onChange={this.inputListener}
                            required={true}
                            instructions="Enter your name" />

                        <TextField
                            type="email"
                            className="form-control"
                            id="email"
                            label="E-mail"
                            name="email"
                            value={email || ''}
                            onChange={this.inputListener}
                            required={true}
                            instructions="Your best email" />
                    </div>

                    <div className="col-sm-6 no-padding-right">

                        <TextField
                            type="text"
                            className="form-control"
                            id="city"
                            label="City"
                            name="city"
                            value={city || ''}
                            onChange={this.inputListener}
                            required={false}
                            instructions="Which city do you live in " />


                        <div className="form-group">
                            <label className="text-bold">Ride in group?</label>
                            <br />

                            <RadioButton
                                type="radio"
                                id="rideInGroup1"
                                name="rideInGroup"
                                label="Always"
                                className="custom-control-input"
                                value="always"
                                checked={this.state.rideInGroup === 'always'}
                                onChange={this.inputListener} />

                            <RadioButton
                                type="radio"
                                id="rideInGroup2"
                                name="rideInGroup"
                                label="Sometimes"
                                className="custom-control-input"
                                value="sometimes"
                                checked={this.state.rideInGroup === 'sometimes'}
                                onChange={this.inputListener} />

                            <RadioButton
                                type="radio"
                                id="rideInGroup3"
                                name="rideInGroup"
                                label="Never"
                                className="custom-control-input"
                                value="never"
                                checked={this.state.rideInGroup === 'never'}
                                onChange={this.inputListener} />
                        </div>

                        <div className="form-group">
                            <label className="text-bold">Days of the week</label>
                            <br />

                            <CheckBoxButton
                                type="checkbox"
                                className="custom-control-input"
                                id="daysWeek1"
                                label="Sun"
                                value="Sun "
                                onChange={this.inputListenerCheckBox} />

                            <CheckBoxButton
                                type="checkbox"
                                className="custom-control-input"
                                id="daysWeek2"
                                label="Mon"
                                value="Mon "
                                onChange={this.inputListenerCheckBox} />

                            <CheckBoxButton
                                type="checkbox"
                                className="custom-control-input"
                                id="daysWeek3"
                                label="Tue"
                                value="Tue "
                                onChange={this.inputListenerCheckBox} />

                            <CheckBoxButton
                                type="checkbox"
                                className="custom-control-input"
                                id="daysWeek4"
                                label="Wed"
                                value="Wed "
                                onChange={this.inputListenerCheckBox} />

                            <CheckBoxButton
                                type="checkbox"
                                className="custom-control-input"
                                id="daysWeek5"
                                label="Thu"
                                value="Thu "
                                onChange={this.inputListenerCheckBox} />

                            <CheckBoxButton
                                type="checkbox"
                                className="custom-control-input"
                                id="daysWeek6"
                                label="Fri"
                                value="Fri "
                                onChange={this.inputListenerCheckBox} />

                            <CheckBoxButton
                                type="checkbox"
                                className="custom-control-input"
                                id="daysWeek7"
                                label="Sat"
                                value="Sat "
                                onChange={this.inputListenerCheckBox} />
                        </div>
                    </div>

                    <div className="mt-4">
                        <button type="button" className="btn btn-success" onClick={this.submitForm}>Save</button>
                        <button type="reset" className="btn btn-secondary" onClick={this.clearState}>Discard</button>
                    </div>
                </form>
            </div>

        )
    }
}
