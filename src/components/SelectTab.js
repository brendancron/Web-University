import React from 'react';
import { Link } from 'react-router-dom';
import './SelectTab.css';
import '../Hover.css';

class SelectTab extends React.Component {
    render() {
        return (
            <li>
                <Link to={this.props.path}>
                    <div className="box choice_box">
                        <div className="img_container">
                            <img src={require('../images/test.svg')} alt="my img"></img>
                        </div>
                        <h1>{this.props.info.name}</h1>
                        <p>{this.props.info.description}</p>
                    </div>
                </Link>
            </li>
        );
    }
}

export default SelectTab;