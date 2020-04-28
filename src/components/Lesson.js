import React from 'react';
import Tools from './Tools'
import Quiz from './Quiz'
import "./Column.css"
import "./Lesson.css"

export default class Lesson extends React.Component {
    constructor(obj) {
        super(obj);
        this.state = {
            showTools: false,
            lessonType: "video",
            rowWidth: '200%',
            delay: '2s',
            translation: '100%'
        }
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
                        <h1>{this.props.classData.name}</h1>
                        <p>{this.props.classData.description}</p>
                        {(this.state.lessonType === "video") && <iframe title="lessonPlayer" width="600" height="400" src={this.props.classData.URL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
                        {(this.state.lessonType === "quiz") && <Quiz />}
                    </div>
                    <div className="rcol" style={{ transform: `translate(${this.state.translation},0px)` }}>
                        <Tools />
                    </div>
                </div>
            </div >
        );
    }
}
