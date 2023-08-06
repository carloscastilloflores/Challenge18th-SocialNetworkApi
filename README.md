# Challenge18th - Social Network API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


* [User-Story](#User-Story)
* [Description](#description)
* [Technologies Used](#Technologies-used)
* [Acceptance Criteria ](#Acceptance-Criteria)
* [Walkthrough Video](Walkthrough-Video)
* [Usage Information](#Usage-information)
* [License](#license)
* [Repository](#Repository)

## User Story 
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Description 
This is a backend API for a social network web application built using NoSQL (MongoDB) to handle large amounts of unstructured data. The API allows users to share their thoughts, react to friends' thoughts, and manage their friend list.

## Technologies Used
- Express.js
- MongoDB
- Mongoose ODM

## Acceptance Criteria 
1. When the application is invoked, the server starts, and the Mongoose models are synced to the MongoDB database.
2. GET routes for users and thoughts display data in a formatted JSON in Insomnia.
3. POST, PUT, and DELETE routes for users and thoughts are successfully tested in Insomnia.
4. POST and DELETE routes for reactions to thoughts are successfully tested in Insomnia.
5. Users can be added and removed from a user's friend list using the appropriate routes in Insomnia.

## Walkthrough Video 
Click [here](https://drive.google.com/file/d/1ICae3K2VQW1PTKL9O_hZwHuIWIF4P86G/view?usp=share_link) to go to the Deployed Application. 

## Usage Information
To run the API, follow these steps:

Clone the repository to your local machine.
Install the required dependencies using npm install.
Start the server using npm start.

## Licence 
This application is covered under the MIT License

## Repository
Click [here](https://github.com/carloscastilloflores/Challenge18th-SocialNetworkApi.git) to go to the GitHub Repository. 
