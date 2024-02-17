let i = 0

const task = setInterval(logAndIncrement , 1500)
function logAndIncrement(){
    console.log(i)
    if( i < 10) {
        i ++
    } else {
        clearInterval(task)
    }
}