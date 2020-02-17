import React from 'react';

function Increment() {
    var value = parseInt(localStorage.getItem("My Value"));
    if (Number.isNaN(value)) {
        localStorage.setItem("My Value", 1);
    } else {
        localStorage.setItem("My Value", value + 1);
    }
    console.log(localStorage);
}

function Reset() {
    localStorage.clear();
    console.log(localStorage);
}

function Account() {
    return (
        <div>
            <h1>Account</h1>
            <p>Sign in to your account</p>
            <p>Data taken before user signs in will be saved in local storage</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default Account;
