function gentleGreeting(object) {
    if(object.gender === "male") console.log("hello gentleman")
    if(object.gender === "female") console.log("hello my lady")
}

gentleGreeting({gender : "male"})
