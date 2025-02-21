# DevTinder Application (Interaction between the developers)

## Waterfall Model (SDLC Life cycle methods)
- Requirements 
    - Product/Project Managers + designers : define the requirements
- Design
    - Senior Engineers and Engineering Managers : makes the design documents (HLD/LLD).
- Development
    - SDE1, SDE2 team : develops the application
    - Write the unit testcases
- Testing
    - QA team : tests the application
- Deployment
    - DevOps : deploy the application
- Maintainance

## Monolith vs Microservices architectures 
- **Monolith architecture :**
    - Whole application in one big repository 
        - Frontend
        - Backend
        - DB connection
        - Emails
        - Authentication
        - Analytics
- **Microservices architecture**
    - Develop the application in different microservices.
    - Most of the industries follows Microservices architecture.
    
|   | Monolith architecture | Microservices architecture |
| - | --------------------- | -------------------------- |
| Dev Speed | Slower - because lot of developers working in same repository | Faster- bccause each team handle their repository independently |
| Code Repo |single | Multiple |
| Scalability | bad | good |
| Deployment | deploy whole code, even if it is a small change | easy to deploy |
| Tech stack | restricted | use different techstack in each microservice|
| Infra cost | lower | higher|
| Complexity | tough when the application is bigger | easy for big applications |
| Fault Isolation | hard | easy |
| Testing | easier | hard |
| Ownership | central | multiple team |
| Maintainance | hard | easier to maintain |
| Debugging | slightly easier | hard |
| Dev Experience | recommended to use microservices for small apps | recommended to use microservices for big apps |

## What happens in NamsteDev.com ?
- Student 
    - Web app
    - Next.js
- Admin
    - web app
    - React JS
- Backend
    - Node.js
- Student 
    - Mobile app
    - React Native

## What are we going to build in Dev Tinder ?
- Frontend
    - React.js
- Backend
    - Node.js

## DevTinder product requirements : 
1. Create an account
2. Login page
3. Update your profile
4. Feed page - explore
5. Send connection Request
6. See our matches
7. See the request we have sent/received

## Tech Planning :
- Two microservices
    - Frontend
        - React.js
    - Backend
        - Node.js
        - Mongo DB
## LLD (Low Level Design) :
- DB design - List of collections to store data
    - User Collection
        - firstName
        - lastName
        - emailId
        - password
        - age, gender etc...
    - Connection Requests
        - from userId
        - to userId
        - statuses
            - pending
                - accepted
                - rejected
            - ignored
- API design - {REST API}
    - GET
        - profile
        - request
        - connection
    - POST
        - signup
        - login
        - profile
        - send request
            - ignore
            - interested
        - review request
            - accept
            - rejected
    - PUT - update the data 
    - PATCH - update the data
        - profile
    - DELETE
        - profile

## Create and setup server
- install  `express.js` for creating the server using `npm install express` command.
- import the express in app.js 
- create the server using express.

### nodemon - 
- It automatically refresh the server, whenever the changes happens.
- With nodemon, no need to run the server for every change.

## Web Application
- **vite** - build tool used to create React.js/Next.js projects.
- `npm create vite@latest devTinder-web -- --template react` used to create project.