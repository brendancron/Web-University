import React from 'react';
import { Link } from 'react-router-dom';
import './SelectTab.css';
import '../Hover.css';
import GradeWheel from './GradeWheel.js';
import Grades from './Grades.js';

export default class SelectTab extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseExit = this.mouseExit.bind(this);
    }
    mouseEnter() {
        this.setState({
            show: true
        })
    }
    mouseExit() {
        this.setState({
            show: false
        })
    }
    renderImg() {
        try {
            return <img src={require(`../images${this.props.data.path}.svg`)} alt="default img" />
        } catch (err) {
            return <img src={require('../images/default.svg')} alt="default img" />
        }
    }
    getWheel() {
        return (
            this.state.show &&
            (typeof this.props.data.showGrade !== 'undefined') &&
            (this.props.data.showGrade) &&
            <GradeWheel percentage={Grades.getGrade(this.props.data.path)} show={this.state.show} />
        );
    }
    render() {
        return (
            <li>
                <Link to={this.props.data.path}>
                    <div className="box choice_box" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit}>
                        <div className="img_container">
                            {this.renderImg()}
                        </div>
                        <h1>{this.props.data.name}</h1>
                        <p>{this.props.data.description}</p>
                        <div className="progress-div">
                            {this.getWheel()}
                        </div>
                    </div>
                </Link>
            </li>
        );
    }
}