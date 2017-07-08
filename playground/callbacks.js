// callback func() => a func that can pass as an argument to an other func and is executed after some event happens

var getUser = (id, callback) => {
    var user = {
        id,
        name: "Junaid"
    };
    setTimeout(() => callback(user), 1000);
};

getUser(31, (userObj) => {
    console.log(userObj);
});

console.log("Finishing app");

