// saving return result of the constructure function of promises
// it take one argument, an anonymous func()
// this func() take 2 args, resolve and reject. these both are func()
// if the promise is doing some thing (like fetching data) then it is in pending
// if it done it work then it is settled
var somePromise = new Promise((resolve, reject) => {
    // all asynchronous code here...
    setTimeout(() => {
        // resolve("Hey. It worked!");
        reject("Unable to fulfill promise");
    }, 2000);
});

somePromise.then((message) => {
    console.log("Success:", message);
}, (errorMsg) => {
    console.log("ERROR:", errorMsg);
});

console.log("Finished");