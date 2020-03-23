import React, { Component } from 'react'
import './TextField.scss';

export default class TextField extends Component {

    inputListener = event => {
        const { name, value } = event.target; 
        this.setState( { [name]: value });
    }

    render() {
        const { label, instructions, required, id } = this.props;

        return (
            <div>
                <div className="form-group">
                    <label htmlFor={id} className="label">{label}</label>
                    <input {...this.props} />
                    <span className="instruction-text">{instructions}</span>
                    {!required &&<span className="optional-text">optional</span>}
                </div>
            </div>
        )
    }
}
