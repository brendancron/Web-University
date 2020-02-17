import React from 'react';
import Tools from './Tools'
import "./Column.css"

function Lesson() {
    return (
        <div>
            <h1>Lesson</h1>
            <div className="row">
                <div className="column col1">
                    <h2>Column 1</h2>
                    <p>Some text..</p>
                </div>
                <div className="column col2">
                    <Tools />
                </div>
            </div>
        </div>
    );
}

export default Lesson;
