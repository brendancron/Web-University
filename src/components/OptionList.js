import React from 'react';
import SelectTab from './SelectTab.js'
import './List.css';
import '../Hover.css';
import curriculum from '../curriculum.json';

function OptionList({ match }) {
    const options = curriculum[match.url].options.map((path) => {
        return <SelectTab info={curriculum[path]} path={path} />
    });
    return (
        <div>
            <h1 className="title"> {curriculum[match.url].name} </h1>
            <p>
                {curriculum[match.url].description}
            </p>
            <ul className="side-by-side">
                {options}
            </ul>
        </div>
    );
}

export default OptionList;
