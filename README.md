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

##How to use
*Make sure you have node installed on your computer*  
Clone this repo and start server:
```
$ git clone https://github.com/fmlharrison/node-api
$ cd node-api
$ node server.js
```
Go to http://localhost:8080

##Hosting the API
The static landing page for the API can be found at [https://user-data-api.herokuapp.com/](https://user-data-api.herokuapp.com/).

##Consuming the API
The API can be consumed using the Google Chrome extension Postman.  
While inside Postman, use the localhost url and you can send:
GET http://localhost:8080/api/users  - This will return all of the user data stored in the current session.
GET http://localhost:8080/api/users/:id  - This will return the data for a user with that id.    
POST http://localhost:8080/api/users - In the body of the post request put the user *id*, *email*, *forename* and *surname*.   
PUT http://localhost:8080/api/users/:id - Using a specific user id you can update the user's *id*, *email*, *forename* and/or *surname*.   
DELETE http://localhost:8080/api/users/:id - Using a specific user id you can delete that user from the data.  
