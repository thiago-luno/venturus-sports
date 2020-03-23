import React, { Component } from 'react'

export default class CheckBoxButton extends Component {


    render() {
        const { label, id } = this.props

        return (
            <div className="custom-control custom-checkbox custom-control-inline">
                <input {...this.props} />
                <label className="custom-control-label" htmlFor={id}>{label}</label>
            </div>
        )
    }
}
