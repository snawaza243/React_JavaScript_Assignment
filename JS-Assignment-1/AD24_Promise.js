/**
 * What is JavaScript Promise? Suppose you are appearing for the exam; your dad promises you to give the new mobile after getting a pass with first class. Write a JavaScript code to crate a promise object for above mention real world example.
 */

function AD24_Promise() {

    // main promise code start here
    var myPromise = new Promise(
        function (resolve, reject) {
            const a = 'pass';
            if (a = 'pass') {
                resolve();
            }
            else {
                reject();
            }
        }
    )
    myPromise
    .then(function () { console.log('Pass')})
    .catch(function () {console.log('Fail')})

    // till here

    return (
        <>
            <h1>Promise in JavaScript</h1>
            <p>Open Console</p>
        </>
    )
}

export default AD24_Promise