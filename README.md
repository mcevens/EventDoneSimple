# EventDoneSimple

[EventDoneSimple LIVE](http://www.eventdonesimple.site)

EventDoneSimple is a full-stack web application inspired by [Eventbrite](http://www.eventbrite.com). This application was implemented using an MVC architecture whith Rails on the backend, and Redux React.js on the front end. PostgreSQL is the DBMS used for data persistance.

## Features & Implementation

### Authentication

  User registration is the entry of the software. To be able to conveniently operate all of the critical operations, a person must have an account. The authentication module provides a user with forms where he can create an account and sign in to the system. It includes :

   * Data validation ( email , password  )
   * Protection against Cross-Site Request Forgery (CSRF) using session token
   * Password hashed with a cryptographic algorithm proven to be effective.
   * Demo login to allow the use of the software for experimental purpose by a non registered user.


### Events

  The main purpose of this project is to provide a user a web platform where he can organize events and allow people to attend them. The events module provides a user with all the basic info to
   * Creation of event
   * Edition of event
   * View information about an event
   * List all events
