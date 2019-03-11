# Data-Modeling
===========================================================================

## Project Name
Lab-08-Data-Modeling
https://travis-ci.com/Alwynblake/

### Author: Alistair Blake

### Links and Resources
repo https://github.com/Alwynblake/Data-Modeling
https://travis-ci.com/Alwynblake/
back-end
front-end https://Lab-08-datamodeling.herokuapp.com/
    
## Assignment: Data-Modeling
* The provided API server is setup to work, but the data models are missing

* Work in the models folder in the starter code
* You will find the models (with empty methods) in the models folder
* Implement each data model, in different manners, using only TDD
* Categories
* Create this as a class
* The model class should hold and manage the data in memory
* The model class should expose methods that match REST verbs
* get()
* post()
* put()
* delete()
* Products
* Create this as a class
* Create a mongoose schemas for this collection
* Use a pre-save hook to manipulate some part of the input (uppercase something, for example)
* The model class should expose methods that match REST verbs yet use mongoose data access methods
* get()
* post()
* put()
* delete()

## Deployment - Server Based Labs
 * Your server must be deployed at Heroku
 * If it requires a database, provision it
 * For APIs, your endpoints should all be testable remotely using httpie or postman
 * For Web Servers, your website must be reachable
 
## Deployment - React Labs
 * Your app must be deployed at AWS Cloudfront
 * Use an automated deployment, connecting your repository to AWS through cloud formation
 
## Testing
 * Write a complete set of tests for all data models, independent of the server
 * For testing the server and routes, use `supertest` to do end-to-end testing
   * What we're testing is not whether express works, but whether your routes are doing the correct things.
 * Your tests must be running green on travis.com
 
##  Documentation
* API Server Documentation

 
