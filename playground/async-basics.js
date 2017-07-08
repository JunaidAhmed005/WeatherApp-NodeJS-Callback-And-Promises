console.log("Starting app");

// asynchronous callback
// do other thing while this callback func will be fired

// setTimeout(() => {}, time in m-sec) => is fired once after the given time
setTimeout(() => {
    console.log("Inside of callback");    
}, 2000);

setTimeout(() => {
    console.log("Inside second setTimeout");    
}, 0);

console.log("Finishing app");
