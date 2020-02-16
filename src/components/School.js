import React from 'react';
import {Link} from 'react-router-dom';
import './School.css';
import '../Hover.css';

class School extends React.Component {
    render() {
        const myStyle = {
            width: 300,
            height: 350
        }
        return (
            <Link to="/other">
                <li>
                    <div className="box" style={myStyle}>
                        <div className="img_container">
                            <img src={require('../images/test.svg')} alt = "my img"></img>
                        </div>
                        <h1>MATH 101</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </li>
            </Link>
        );
    }
}

export default School;