# Getting Started with Running My Fitness Website


# 1. Project Description

This was my first attempt in cementing my learning in building a full-stack Fitness Website application using the MERN stack. Essentially users can register,log in and access protected routes and choose from available workouts and create a customizable workout plan.

The backend uses Node.js, with Express whilst the frontend is built with React.

# 2. Technologies Used/Other Tools  

Frontend: React, React Router\
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT\
Database: MongoDB\
Testing: Jest\
Authentication: JWT, bcrypt\
Styling: CSS


# 3. Installation

To clone the project:

use `git clone https://github.com/deepthinker-88/Fitness-Website.git `

Backend Setup\
`cd server`\
`npm install` to install dependencies

Frontend Setup\
`cd src`\
`npm install` to install dependencies

Creating Environment Variables

Create .env files for both backend and frontend.

Navigate to the `server` directory to access the backend  

PORT = 3005\
MONGODB_URI=mongodb://<your_mongo_host>:<your_mongo_port>/<your_database>\
ACCESS_TOKEN_SECRET=<your_access_token_secret>\
REFRESH_TOKEN_SECRET=<your_refresh_token_secret>

Navigate to the `src` directory to access the frontend  

REACT_APP_API_URL=http://localhost:3005/users  
REACT_APP_ENV=development\
REACT_APP_API_SIGNUP=http://localhost:3005/sign-up  
REACT_APP_API_SIGNIN=http://localhost:3005/sign-in

# 4. Running the project

Make sure to download and install MongoDB using `brew install mongodb-community`\
Start MongoDB using `brew services start mongodb/brew/mongodb-community`\
Verify MongoDB is running by using `mongosh`

Run Backend\
`cd server`\
`npm install`

Run Frontend\
`cd src`\
`npm start`

##  Running Tests


To run the test suite for both the frontend and backend, in the root directory, run `npm test -a` to run all tests.



# 5. What I learned whilst making the project

The project is a culmination of myself learning HTML, CSS JavaScript and React and how these technologies work in conjunction with each other to create a full-stack application.

I had a rough idea on how I wanted the project to look visually but I decided to use figma for UI/UX planning to create a mental model of how each aspect of the project should look.


By mapping out visually beforehand how I wanted the project to look allowed me to break down tasks into smaller parts and tackle them systematically - an essential skill for any developer.  

Thanks for taking the time to view my project, first of many to come 👍🏽

