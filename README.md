# Holidays Extra - Restful API Tech Test

*Please also take a look at my other Holidays Express tech test using the Flickr API [here](https://random-flickr-feed.herokuapp.com/index.html) and checkout the GitHub repo [here](https://github.com/fmlharrison/holidaysextra_tech_test)*

##The Test
We would expect this task to take a few hours, however there is no strict time limit and you won't be judged on how long it took you to complete. Please find a few pointers below:  

Your solution must expose a user model and it's reasonable to expect that an individual user would have the following attributes:  

id - A unique user id  
email - A users email address  
forename - A users first name  
surname - A users last name  
created - The date and time the user was added  

It must have the ability to persist user information for at least the lifetime of the test.  

You API must expose functionality to create, read, update and delete (CRUD) models.  

How your API is to be consumed (a custom interface or something like Google Chrome's "Postman" or Swagger).  

##Technologies
I decided to use Node.js and Express for the server side.   
I also used MongoDB as a database and Mongoose as the ORM.  
I also used a npm called node-restful.  

##How to use
First make sure that your computer has node.js and npm installed:
Download node: [download](https://nodejs.org/en/)  

You also need to be have MongoDB installed on your computer:
```
$ brew update  
$ brew install MongoDB
```

Clone this repo and start server:
```
$ git clone https://github.com/fmlharrison/restful-api.git
$ cd restful-api
$ node server.js
```
Go to http://localhost:3000/api/users

##Consuming the API
The API can be consumed using the Google Chrome extension Postman.  
While inside Postman, use the localhost url and you can send GET, POST, PUT and DELETE requests to the API.
