function AB13_Callback() {
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

    return (
        <>
            <div>
                <h1>Output: {myName('sam', showName)} {showName}</h1>
            </div>
        </>
    )
}

export default AB13_Callback


