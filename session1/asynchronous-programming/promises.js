function timeConsumingLogic(success){
    let i = 0
    while(i < 10 ** 10){
        i++
    }
    return success
}

let promise = new Promise(function(resolve, reject) {
    let success = timeConsumingLogic(true);
    if (success) {
        resolve("Task completed!");
    } else {
        reject("Task failed!");
    }
});


promise.then(
    function(result) {
        console.log(result);
    },
    function(error) {
        console.log(error);
    }
);
console.log("hi i'm an urgent treatment")