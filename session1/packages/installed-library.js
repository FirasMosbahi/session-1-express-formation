//first install bcrypt using npm i bcrypt
// Now we will use our installed library bcrypt to hash our secret phrase

const bcrypt = require('bcrypt')

const my_secret_string = "hello fresh backend developers"

const saltRounds = 10

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(my_secret_string, salt, function(err, hash) {
        console.log(hash)
    });
});