const username = process.argv[2]
const fs = require('fs');
const path = require('path');


if(!username){
    console.log("Please Provide a Username🫡");
    process.exit(1);
}

async function getActivity(){
    const url = `https://api.github.com/users/${username}/events`;
    const response = await fetch(url);

    const data = await response.json();
    for(const event of data){
        if(event.type == "PushEvent"){
            console.log(`Pushed to ${event.repo.name}`)
        }else if(event.type == "CreateEvent"){
            console.log(`Created ${event.payload.ref_type} in ${event.repo.name}`);
        }else if(event.type == "WatchEvent"){
            console.log(`Starred at ${event.repo.name}`);
        }
    }
}
getActivity();