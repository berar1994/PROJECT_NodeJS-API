# PROJECT_NodeJS-API
Simple REST API using Node.js with Mongo  

# Perequisites:    
1. Node.js installed  
2. MongoDB installed  
3. Client for MongoDB, i prefer Robo 3T  

# How to run  
* create a folder on your local disk  
* clone this repository into your folder  
* open GitBash or CMD(Command Prompt) in folder and type 'npm install'  
* start your mongo by typing in a new CMD the command 'mongod' (presuming MongoDB is present in PATH)  
* if MongoDB is not present in PATH then follow next tutorial https://www.youtube.com/watch?v=6vTgWXPIPwU and try again  
* run the create_db.bat file; this will create the db and insert 2 tasks  
* run the api by typing in GitBash or CMD the command 'npm run start'  

# Test  
For testing you can use Postman to make the http requests.  
localhost:3000/tasks    - GET all tasks  
localhost:3000/task/id  - GET task by mongodb id  
localhost:3000/task     - POST save new task  
localhost:3000/task/id  - POST delete a task by mongodb id  
localhost:3000/task     - PUT update task by mongodb id  
