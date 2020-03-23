import React, { Component } from 'react'

export class RadioButton extends Component {

    render() {
        const { label, id } = this.props; 
        return (
            <div className="custom-control custom-radio custom-control-inline">
                <input {...this.props} />
                <label className="custom-control-label" htmlFor={id}>{label}</label>
            </div>
        )
    }
}

export default RadioButton
