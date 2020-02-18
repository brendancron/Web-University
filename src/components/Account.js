import React from 'react';

import LocalDownload from './LocalDownload';
import LocalUpload from './LocalUpload';

export default class Account extends React.Component {
    constructor() {
        super();
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        var value = parseInt(localStorage.getItem("/lesson/Addition1"));
        if (Number.isNaN(value)) {
            localStorage.setItem("/lesson/Addition1", 1);
        } else {
            localStorage.setItem("/lesson/Addition1", value + 1);
        }
        console.log(localStorage);
    }

    reset() {
        localStorage.clear();
        console.log(localStorage);
    }

    render() {
        return (
            <div>
                <h1>Account</h1>
                <p>Sign in to your account</p>
                <p>Data taken before user signs in will be saved in local storage</p>
                <p>Make Look Pretty,
                    Make it so if you select the same file twice it works
                </p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.reset}>Reset</button>
                <LocalDownload />
                <LocalUpload />
            </div>
        );
    }
}
