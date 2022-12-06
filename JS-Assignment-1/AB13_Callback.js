import React from 'react'
/**
 * Assignment 1
 * B13 Explain what a callback function is and provide a simple example
 * 
 */
// 

// output in console

// example 1
function myName(name, callback) {
    var fullName = "Good Morning " + name;
    callback(fullName);
}
function showName(name) {
    // var output = name;
    console.log(name)
}

showName(myName, 'Sam')

// example 2
function greet(name) {
    return `Hi!! ${name} `;
}

function greet_name(greeting, message, name) {
    console.log(`${greeting(name)} ${message}`);
}

greet_name(greet, 'Welcome To React, ', 'JavaScript');
