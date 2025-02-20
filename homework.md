## Server
- create repository
- initialize the repository
- node_modules, package.json, package-lock.json
- install express
- create a server
- listen to port 3000
- make request handlers for /test, /hello
- install nodemon
- update scripts in package.json
- difference between caret and tilde (^ vs ~)
- What are dependencies
- What is the use of `-g` while doing npm install.
## GitHub
- initialize git
- gitignore
- create a remote repo on github
- push all the code to remote origin
## Routes
- play with routes and route extensions
    - ex: /hello/2, /hell0, /test
- Order of the routes matter a lot
## HTTP Methods
- Install postman app
- Make a workspace/collection > test api calls
- write logic to handle GET, POST, PATCH, DELETE API calls and test them on postman.
- explore routing and use of `?, +, (), *` in the routes.
- Use of regex in routes `/a/, /.*fly$/`
- reading the queryparams in the routes
- Reading the dynamic routes
- Multiple route handlers
- next()
- next function snd errors along with res.send()
- what is middleware? why do we need it?
- How express JS basically handles requests behind the scenes
- Difference btw app.use and app.all
- Error handling

## Database connection
- create a free cluster on mongodb official website `Mongo Atlas`.
- Install mongoose library `https://mongoosejs.com/docs/guide.html`
- connect your application to the database `"Connection-url/DevTinder"`.
- Call the connectDB function and connect to the database before starting application on 3000.
- Create a userSchema & user model
- create POST `/signup` API to add data to database
- Push some documents using API calls from postman
- Error handling using try, catch

- Difference between JS object and JSON.
- Add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user.
- User.findOne with duplicate email ids, which object returned
- API - get users by email
- API- Feed API - GET/feed - get all the users from the database
- create an API get user by id `findById()`
- create delete user api
- Difference between `PATCH and PUT` methods
- API - update user
- Explore mongoose documentation for model methods
- what are options in a model.findOneAndUpdate method, explore more about it
- API - update the user with email ID

- Explore schema type options from the documentation
- add required, unique, lowercase, min, minLength, maxLength, trim, default validations
- Create a custom validate function for gender
- Improve the DB schema - put all appropriate validations on each field in schema
- Add timestamps to the user schema
- Add API level validation on patch request and signup post api
- `Data Sanitization` - Add API validation for each field

- Install validator
- Explore validator library functions and use validatory functions for password, email, photoUrl
- NEVER TRUST req.body

- validate data in Signuo API
- Install `bcrypt` library
- Create password hash using `bcrypt.hash` and save the user with encrypted password.
- Create login API
- Validate the data and compare the password
- Throw error if email/password invalid

- Install cookie-parser
- just send a dummy cookie to user
- Create GET / profile API and check if you get the cookie back
- install jsonwebtoken
- In login API, after email and password validation, create JWT token and send it to the user in cookie
- Read the cookies inside your profile API and find the logged in user

- create userAuth middleware
- Add the userAuth middleware in profile API and add a new sendconnectionRequest API
- Set the expiry of JWT token and cookies to 7 days.
- Create userSchema method to getJWT()
- Create userSchema method to validatePassword()

## Routes
- Explore tinder APIs
- Create a list of all API you can think of in DevTinder
- Group multiple routes under respective routers
- Read documentation of `express router`
- Create routes folder for managing auth, profile, request routers
- Create authRouter, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout aPI
- Create PATCH /profile/edit
- Create PATCH /profile/password API => forgot password API
- Make sure to validate all data in every POST, PATCH request

- create connection request schema
- send connection request API
- Proper validation of data
- think about ALL corner cases
- read more about indexes in mongoDB
- why do we need index in DB?
- `$or, $and, $not, $nor` in mongoose/mongoDB
- What is the advantages and disadvantages of creating?
- Schema.pre("save") function
- Read the article about compound indexes

- Write and review proper code for `/request/review/:status/:requestId` API.
- Thought process - POST vs GET
- read about `ref and populate` 
- create GET api User/request/received aPI
- 