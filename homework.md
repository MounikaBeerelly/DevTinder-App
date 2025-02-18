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
