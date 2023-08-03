# Challenge18th-SocialNetworkApi

// To do's: 
1. Set up MongoDB on your machine by following the installation guide provided in the project.

2. Define the data models using Mongoose for the following entities:
User: It should have fields like username, email, thoughts, and friends.
Thought: It should have fields like thoughtText, createdAt, username, and reactions.
Reaction (as a subdocument schema in the Thought model): It should have fields like reactionId, reactionBody, username, and createdAt.

3. Create API routes using Express.js for the following functionalities:
Users:
GET all users
GET a single user by its _id and populate thought and friend data
POST a new user
PUT to update a user by its _id
DELETE to remove a user by its _id (Bonus: Remove associated thoughts when deleting a user)
Friends:
POST to add a new friend to a user's friend list
DELETE to remove a friend from a user's friend list
Thoughts:
GET all thoughts
GET a single thought by its _id
POST to create a new thought (Don't forget to push the created thought's _id to the associated user's thoughts array field)
PUT to update a thought by its _id
DELETE to remove a thought by its _id
Reactions (as part of Thoughts):
POST to create a reaction stored in a single thought's reactions array field
DELETE to pull and remove a reaction by the reaction's reactionId value

4. Ensure the application uses the Mongoose package to connect to the MongoDB database.

5. Format queried timestamps properly.

6. Create a walkthrough video that demonstrates the functionality of the API, including all of the acceptance criteria mentioned in the task.

7. Submit your GitHub repository containing your application code and a high-quality README with a description of the project and a link to the walkthrough video.

## Technologies Used 
Express.js for routing, a MongoDB database, and the Mongoose ODM