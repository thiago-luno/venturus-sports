import React, {Component} from 'react';
import TitleSection from '../TitleSection/TitleSection';
import './DataTable.scss';

class DataTable extends Component {

    constructor(props) {

        super(props);
        this.lines = [];
        this.columns = props.columns.map( (coluna,index) => {
					if(coluna === 'Ride') {
						coluna = 'Ride in group'
					}

					if(coluna === 'Week') {
						coluna = 'Day of the week'
					}

					return <th key={ index }>{ coluna }</th>
				}); 
				
				this.state = {
					isHovering: false
				}
    }
    

    buildLines () {

			this.props.data.forEach(data => {

				let line = {};

					this.props.columns.map(columns => {
							return line[columns.toLowerCase()] = data[columns.toLowerCase()];
					});

				this.lines.push(line);
			});
		}
		
		handleMouseEnter = () => {

			this.setState({ isHovering: true })
		}

		handleMouseLeave = () => {
			this.setState({ isHovering: false })
		}

    render() {
        
        this.buildLines()

        return (
    
            <div className="container-fluid">
    
                <TitleSection title="Users"/>
    
                <div>
                    <table className="table table-borderless table-striped table-hover">
                        <thead>
                            <tr>
                                { this.columns }
                            </tr>
                        </thead>
    
                        <tbody>    
                               
                            {this.lines.map((line,index) => {
    
															let tr = [];
															let td = [];
															let count = 0;
	
															for (let key in line) {
																	td.push(<td key={count}>{line[key]}</td>);
																	count++;
															}
	
															tr.push(<tr key={index} onMouseEnter={this.handleMouseEnter}  onMouseLeave={this.handleMouseEnter}>{td}</tr>)
    
                            	return tr;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
}

export default DataTable;
