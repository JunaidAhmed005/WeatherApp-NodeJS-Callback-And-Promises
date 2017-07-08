
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
                resolve(a + b);
            } else {
                reject("ERROR! Arguments must bbe number.")
            }
        }, 2500);
    });
};

asyncAdd(5, 7).then((res) => {
    console.log("Result:", res);
}, (errorMsg) => {
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