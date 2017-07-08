
// saving return result of the constructure function of promises
// it take one argument, an anonymous func()
// this func() take 2 args, resolve and reject. these both are func()
// if the promise is doing some thing (like fetching data) then it is in pending
// if it done it work then it is settled

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            } else {
                reject("ERROR! Arguments must be number.")
            }
        }, 2500);
    });
};

// chaining promises 

// there is an error in this promise
// if 1st one promise is rejected then the second promise will be run which is wrong


// asyncAdd(5, '7').then((res) => {
//     console.log("Result:", res);
//     return asyncAdd(res, 33);
// }, (errorMsg) => {
//     console.log(errorMsg);
// }).then((res) => {
//     console.log("should be 45 =", res);
// }, (errorMsg) => {
//     console.log(errorMsg);
// });

// to solve this problem we use catch() just like then()
// catch() is used for error handling

asyncAdd(5, 7).then((res) => {
    console.log("Result:", res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log("Should be 45:", res);
}).catch((errorMsg) => {
    console.log(errorMsg);
});

var somePromise = new Promise((resolve, reject) => {
    // all asynchronous code here...
    setTimeout(() => {
        resolve("Hey. It worked!");
        // reject("Unable to fulfill promise");
    }, 2000);
});

somePromise.then((message) => {
    console.log("Success:", message);
}, (errorMsg) => {
    console.log("ERROR:", errorMsg);
});

console.log("Finished");