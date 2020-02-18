import React from 'react';
import Tools from './Tools'
import "./Column.css"

export default class Lesson extends React.Component {
    constructor() {
        super();
        this.showTools = false;
        this.state = {
            rowWidth: '200%',
            delay: '2s',
            translation: '100%'
        }
        this.toggleCol = this.toggleCol.bind(this);
    }

    toggleCol() {
        this.showTools = !this.showTools;
        if (this.showTools) {
            this.setState({
                rowWidth: '100%',
                delay: '0s',
                translation: '0%'
            });
        } else {
            this.setState({
                rowWidth: '200%',
                delay: '2s',
                translation: '100%'
            });
        }
    }

    render() {
        return (
            <div>
                <div className="row" style={{ width: this.state.rowWidth, transitionDelay: this.state.delay }}>
                    <div className="lcol">
                        <div className="toggleBtn" onClick={this.toggleCol}>Toggle Tools</div>
                        <h1>Lesson Tab</h1>
                        <p>add tool filter</p>
                    </div>
                    <div className="rcol" style={{ transform: `translate(${this.state.translation},0px)` }}>
                        <Tools />
                    </div>
                </div>
            </div >
        );
    }
}
