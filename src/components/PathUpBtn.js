import React from 'react';
import './PathUpBtn.css';
import { Link } from 'react-router-dom';

export default class Lesson extends React.Component {
    render() {
        let upURL = '/';
        if (this.props.URL !== '/') {
            var patt = "^(/(?:[a-zA-Z0-9]+/)*)[a-zA-Z0-9]+/$";
            upURL = this.props.URL.match(patt)[1];
        }
        return (
            <Link className="path-btn" to={upURL}>
                Go Up
            </Link >
        );
    }
}
