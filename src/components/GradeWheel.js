import React from 'react';
import './GradeWheel.css';

export default class Donate extends React.Component {
    constructor(props) {
        super(props);
        this.circumference = 261;
        this.fail = 50;
    }
    render() {
        var style = {
            "--custom-point": (this.circumference - (this.circumference * (this.props.percentage) / 100)),
            "--circumference": this.circumference,
            "--hsv-val": ((this.props.percentage > this.fail) ? (120 / this.fail * (this.props.percentage - this.fail)) : 0)
        }
        return (
            <div>
                <svg viewBox="0 0 100 100">
                    <circle className="mask" cx="50" cy="50" r="43" style={style} />
                    {(this.props.percentage > 0) && <circle className="fill" cx="50" cy="50" r="43" style={style} />}
                    <text x="50" y="58" className="percentage">{(this.props.percentage > 0) ? `${this.props.percentage}%` : 'Learn!'}</text>
                </svg>
            </div>
        );
    }
}
