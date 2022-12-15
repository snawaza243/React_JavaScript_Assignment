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