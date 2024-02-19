function timeConsumingLogic(success){
    let i = 0
    while(i < 10 ** 10){
        i++
    }
    return success
}

//callback queue
let promise = new Promise(function(resolve, reject) {
    let success = timeConsumingLogic(true);
    if (success) {
        resolve("Task completed!");
    } else {
        reject("Task failed because the CPU resources aren't enought!");
    }
});


promise.then(
    //main queue
    function(result) {
        console.log(result);
    },
    //main queue
    function(error) {
        console.log(error);
    }
);

console.log("hi i'm an urgent treatment")