An API using Node Express and MongoDB. Also uses Morgan for request/response logging within node.

<h1>Starting the server</h1>

run node server.js and go to http://localhost:3000/todo

I recommend using Postman for API testing, and using a mongoDB GUI called mongo-express, for manually handling the DB data.

Postman can be downloaded via the chrome app store.

To download mongo-express

    npm install --save mongo-express

copy the config.default file within the mongo-express folder, create a new file called config.js, paste the contents, and change the admin/pass.

To access the mongoDB GUI YOUR_PATH\node_modules\mongo-express && node app.js and it will be running on localhost:8081.
