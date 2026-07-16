const username = process.argv[2]
const fs = require('fs');
const path = require('path');


if(!username){
    console.log("Please Provide a Username🫡");
    process.exit(1);
}

console.log(`GitHub Username: ${username}`)