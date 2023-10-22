# Acronyms_Api
Change the database pool to your local details: eg; line 12 to 18 should be changed to your db details
const pool = new Pool({
    user: '*******',
    host: 'localhost',
    database: 'AppliedCoding',
    password: '*******',
    port: 5432,
});
To run the code, you need to install the following dependencies:
npm install, npm install express body-parser pg cors
To start the code, you need to node app.js, then start the following url:

GET http://localhost:8080/Acronyms?page=1&pageSize=10

To run the post url, you need to enter your body -> you need to go to the body, then change to json from raw drop down. (note: this steps are neccessary for postman) follow the same steps for patch.
POST http://localhost:8080/acronyms

PATCH http://localhost:8080/acronyms/1 

DELETE http://localhost:8080/acronyms/1
