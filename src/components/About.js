import React from 'react';
import './About.css'

export default class About extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="title">Web University</div>
                <div className="vision-statement">
                    Our vision is to provide a free university-caliber education to everyone from the comfort of their own home.
                </div>
                <div className="mission-statement">
                    Our Mission is to create online classes where people of all ages can learn stress free and can succeed regardless of socioeconomic status, race, gender, sexual orientation, religion or any form of discrimination.
                </div>
            </div>
        );
    }
}
