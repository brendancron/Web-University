import React from 'react';
import Tools from './Tools'
import "./Column.css"

function Lesson() {
    return (
        <div>
            <div className="row">
                <div className="column col1">
                    <h1>Lesson Tab</h1>
                    <p>TODO: make button to toggle tools col, add animation to toggle, add ability to switch between tools, add tool filter</p>
                </div>
                <div className="column col2">
                    <Tools />
                </div>
            </div>
        </div>
    );
}

export default Lesson;
