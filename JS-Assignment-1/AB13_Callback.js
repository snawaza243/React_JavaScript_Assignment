import React from 'react'
/**
 * Assignment 1
 * B13 Explain what a callback function is and provide a simple example
 * 
 */
// 

function AB13_Callback() {
    function myName(name, callback) {
        var fullName = "Good Morning " + name;
        callback(fullName);
    }
    function showName(name) {
        // var output = name;
        console.log(name)
    }


    // example 2
    function greet(name) {
        return `Hi!! ${name} `;
    }

    function greet_name(greeting, message, name) {
        console.log(`${greeting(name)} ${message}`);
    }

    greet_name(greet, 'Welcome To React by ', 'JavaScript');

    return (
        <>
            <div>
                <h1>Output: {myName('sam', showName)} {showName}</h1>
            </div>
        </>
    )
}

export default AB13_Callback


