# DevTinder Web application

- Create a Vite + react application 
    - **vite** - build tool used to create React.js/Next.js projects.
    - `npm create vite@latest devTinder-web -- --template react` used to create project.
- Remove unnecessary code and create a Hello World app.
- Install `tailwind css`,`postcss` and `autoprefixer`
- install `daisyui` - it builts components for you
- Add navbar component to App.jsx
- Create NavBar.jsx in seperate file.
- Install `react-router-dom` to create routes
- Create BrowserRouter . Routes > Route=/ Body > RouteChildren
- Create an Outlet in Body component
- Create a Footer
## Routes
- Body
    - NavBar
    - Route = /  => Feed
    - Route = /login  => Login
    - Route = /connections  => Connections
    - Route = /profile  => Profile

### Login Page
- Create Login page
- install axios
- install cors in backend => add middleware to with configurations and credentials: true
- handle login api
- whenever you're making api call, so pass axios => { withCredentials: true}

### Redux
- Redux toolkit - `https://redux-toolkit.js.org/tutorials/quick-start`
- install react-redux + @reduxjs/toolkit
- configureStore
- Add provider
- createSlice
- add reducer to store
- Add redux devtools in chrome

- Login and see if your data is coming properly in the store
- NavBar should update as soon as user login
- Refactor our code to add constants file + create a components folder
- You should not be able to access other routes without login
- If token is not present, redirect to login page
- Logout feature
- Profile page