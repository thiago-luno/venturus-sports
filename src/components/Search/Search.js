import React, { Component } from 'react';
import debounce from 'lodash/debounce'

export class Search extends Component {

    constructor(props) {
        super(props)
        this.onQueryChange = this.onQueryChange.bind(this)
        
        this.state = {
            query : this.props.query
        }
        
        this.clear = this.clear.bind(this);
        this.servicesValue = debounce(this.servicesValue, 300);
    }
    
    onQueryChange(e) {
        this.setState({ query : e.target.value });
        this.servicesValue(e.target.value);
    }

    servicesValue = (value) => {
        this.props.change(value);
    }
    
    clear() {
        this.props.change('');
        this.setState({ query : '' });
    }

    render() {

        const styles = {
            iconClose : {
                position:  'absolute',
                right: '1.5rem',
                top: '12px',
                cursor: 'pointer',
                color: '#4db6ac',
                userSelect: 'none',
                zIndex: '999',
            },

            inputGroupIcon: {
                borderRight: 'transparent',
                backgroundColor: 'transparent'
            },

            formControl: {
                borderLeft: 'transparent',
            },

            inputGroup: {
                margin: '0',
                padding: '0',
            }

        }
        
        return (
            <div className="input-group col-4" style={ styles.inputGroup }>
                 <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm" style={ styles.inputGroupIcon }><i className="fas fa-search"></i></span>
                </div>
                <input 
                    placeholder={ this.props.placeholder }
                    id="pesquisa" 
                    type="text" 
                    style={styles.formControl}
                    className="form-control" 
                    value={ this.state.query } 
                    onChange={ this.onQueryChange }
                />
                { this.state.query ? <i className="fas fa-times" style={ styles.iconClose } onClick={ this.clear }></i> : null }
            </div>
        )
    }
}

export default Search