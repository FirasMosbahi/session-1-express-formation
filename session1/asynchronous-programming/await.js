async function timeConsumingLogic(success){
    let i = 0
    while(i < 10 ** 10){
        i++
    }
    console.log("heavy logic finished")
    return success
}

async function main() {
    const success = await timeConsumingLogic(true)
    // if(success){
    //     console.log("asynchronous task waited and completed successfully")
    // } else {
    //     console.log("asynchronous task failed")
    // }
    console.log(typeof success)
}

main()
