const username = process.argv[2];

if(!username){
    console.log("Please Provide a Username🫡");
    process.exit(1);
}

async function getActivity() {
    const url = `https://api.github.com/users/${username}/events`;
    try{
        const response = await fetch(url);
        if (!response.ok) {
            console.log(`User "${username}" not found...😵`);
            return;
        }
        const data = await response.json();
        for (const event of data) {
            switch(event.type){
                case "PushEvent":
                    console.log(`Pushed to ${event.repo.name}`);
                    break;
                case "CreateEvent":
                    console.log(`Created ${event.payload.ref_type} in ${event.repo.name}`);
                    break;
                case "WatchEvent":
                    console.log(`Starred ${event.repo.name}`);
                    break;
                default:
                    break;
            }
        }
    }catch(error){
        console.log(`Unable to connect the Github and GithubUser:${username}...😵`);
        console.error(error.message);
    }
}

getActivity();