import React from 'react';
import './Tools.css'

export default class Tools extends React.Component {
    constructor() {
        super();
        this.state = {
            activeKey: ""
        }
        this.changeTool = this.changeTool.bind(this);
    }

    changeTool(event) {
        this.setState({
            activeKey: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Tools</h1>
                <label>Pick a tool:</label>
                <select className="select" id="tools" onChange={this.changeTool}>
                    <option value="">None</option>
                    <option value="calculator">Calculator</option>
                    <option value="desmos">Desmos</option>
                </select>
                {this.state.activeKey === "desmos" && <iframe src="https://www.desmos.com/calculator/g7izucn6nn" title="desmos" className="general-tool"></iframe>}
                {this.state.activeKey === "calculator" && <iframe src='https://www.embed.com/app/calculator/gray-calculator.html' title="scientific-calculator" className="general-tool" scrolling='no' frameBorder='0'></iframe>}
            </div>
        );
    }
}

