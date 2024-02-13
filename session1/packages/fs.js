const fs = require('fs');

const data = "Hello, world!";
fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('File written successfully!');
});
