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