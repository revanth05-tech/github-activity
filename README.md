# GitHub User Activity CLI

A simple Command Line Interface (CLI) application built with **Node.js** that fetches a GitHub user's recent public activity using the GitHub REST API and displays it in the terminal.

## Project URL

https://roadmap.sh/projects/github-user-activity

## Features

- Fetch recent GitHub activity of any public user
- Display Push Events
- Display Create Events
- Display Watch (Star) Events
- Handle invalid usernames gracefully
- Handle network/API errors using try...catch
- Uses the built-in `fetch()` API (No external libraries)

## Technologies Used

- Node.js
- JavaScript (ES6)
- GitHub REST API
- Async/Await

## Project Structure

```
github_activity/
│
├── activity.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Installation

Clone the repository:

```bash
git clone https://github.com/revanth05-tech/github_activity.git
```

Move into the project directory:

```bash
cd github_activity
```

Install dependencies:

```bash
npm install
```

## Usage

Run the application by providing a GitHub username.

```bash
node activity.js <github-username>
```

Example:

```bash
node activity.js kamranahmedse
```

Example Output:

```text
Pushed to kamranahmedse/developer-roadmap
Created branch in kamranahmedse/developer-roadmap
Starred backblaze-labs/genblaze
```

## Error Handling

Invalid username:

```text
User "unknown-user" not found...😵
```

Network/API failure:

```text
Unable to connect the Github and GithubUser:<username>...😵
```

## Learning Outcomes

This project helped me practice:

- Building CLI applications with Node.js
- Working with command-line arguments (`process.argv`)
- Consuming REST APIs using `fetch()`
- Working with JSON responses
- Using `async` / `await`
- Error handling with `try...catch`
- Using `switch` statements for cleaner logic

## License

This project was built for learning purposes as part of the roadmap.sh Backend Developer roadmap.