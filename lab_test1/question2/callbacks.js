function resolvedPromise(){
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("{ message: 'delayed success!' }"), 500);
    });
    promise.then(
        result => console.log(result)
    );
}

function rejectedPromise(){
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => reject(("{ error: 'delayed exception!' }")), 1000);
    });
    promise.then(
        result => console.log(result),
        error => console.log(error)
    );
}

resolvedPromise()
rejectedPromise()