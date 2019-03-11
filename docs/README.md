# Data-Modeling
===========================================================================

## Project Name
Lab-08-Data-Modeling
[![Build Status](https://travis-ci.com/Alwynblake/Data-Modeling.svg?branch=master)](https://travis-ci.com/Alwynblake/Data-Modeling)

### Author: Alistair Blake

### Links and Resources
repo https://github.com/Alwynblake/Data-Modeling
back-end
front-end https://Lab-08-datamodeling.herokuapp.com/
    
## Assignment: Data-Modeling
* The provided API server is setup to work.

* Each data model is implemented in different manners, using only TDD
* Categories
* Created this as a class
* The model class holds and manages the data in memory
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
 * Server is deployed at Heroku
 * If it requires a database, provision it
 * For APIs, your endpoints should all be testable remotely using httpie or postman
 * For Web Servers, your website must be reachable
 
## Testing
 * Write a complete set of tests for all data models, independent of the server
 * For testing the server and routes, use `supertest` to do end-to-end testing
 * What we're testing is not whether express works, but whether your routes are doing the correct things.
 * Your tests must be running green on travis.com
 
##  Documentation
* API Server Documentation

 
