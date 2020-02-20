import React from 'react';
import Tools from './Tools'
import "./Column.css"
import "./Lesson.css"
import curriculum from '../curriculum.json';

export default class Lesson extends React.Component {
    constructor(obj) {
        super(obj);
        this.state = {
            showTools: false,
            rowWidth: '200%',
            delay: '2s',
            translation: '100%',
            classObj: curriculum[obj.match.url]
        }
        console.log(this.state.classObj);
        this.toggleCol = this.toggleCol.bind(this);
    }

    toggleCol() {
        this.setState({
            showTools: !this.state.showTools
        });
        if (this.state.showTools) {
            this.setState({
                rowWidth: '200%',
                delay: '2s',
                translation: '100%'
            });
        } else {
            this.setState({
                rowWidth: '100%',
                delay: '0s',
                translation: '0%'
            });
        }
    }

    render() {
        return (
            <div>
                <div className="row" style={{ width: this.state.rowWidth, transitionDelay: this.state.delay }}>
                    <div className="lcol">
                        <div className="toggleBtn" onClick={this.toggleCol}>Toggle Tools</div>
                        <h1>{this.state.classObj.name}</h1>
                        <p>{this.state.classObj.description}</p>
                        <p>Center Video Player, add Video speed controls</p>
                        <iframe title="lessonPlayer" width="600" height="400" src={this.state.classObj.URL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="rcol" style={{ transform: `translate(${this.state.translation},0px)` }}>
                        <Tools />
                    </div>
                </div>
            </div >
        );
    }
}
