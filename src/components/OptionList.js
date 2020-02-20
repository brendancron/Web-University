import React from 'react';
import SelectTab from './SelectTab.js'
import './List.css';
import '../Hover.css';

export default class OptionList extends React.Component {
    render() {
        const options = this.props.optionData.options.map((data) => {
            return <SelectTab data={data} />
        });
        return (
            <div>
                <h1 className="title"> {this.props.optionData.name} </h1>
                <p>
                    {this.props.optionData.description}
                </p>
                <ul className="side-by-side">
                    {options}
                </ul>
            </div>
        );
    }
}
