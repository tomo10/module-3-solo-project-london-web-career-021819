# Module 3 Solo Project Guidelines

You're going to be building a **SPA** or Single Page Application.  Your frontend will be built with HTML, CSS, and JavaScript. You will also be tasked with first using a `json-server` with a `db.json` file as a MVP backend, before constructing your own backend API built with Ruby on Rails. The frontend application will communicate with the backend by making requests and receiving responses. This is a really exciting moment, the whole course up until this point is coming together!

Building out each feature you want for your application will be challenging, but you all are awesome and can do it. Remember to build iteratively and begin with a clear picture of an MVP.

## Requirements

### Do's

1. As a user of the application, I should be able to create, read, update, and delete the resource of your choosing. The Domain is up to you - some examples:
  + A photo sharing app
  + A ToDo List
  + A Craigslist-style app (users can perform CRUD actions on listings)
2. Use the [json-server](https://github.com/typicode/json-server) package to act as a backend. JSON Server allows you to create a json file to act like an API. Once you have your CRUD app working, you can create a Rails API and swap out the back end.
3. Your backend (first db.json and later Rails) will be the Single Source of Truth for your application. Your frontend will render the data it receives from the backend. The pattern will be that your frontend Fetches data from your server and then renders it. Then the user interacts with the data which may fire subsequent GET, POST or PATCH requests.
4. If your application requires a user model you can have users "sign in" or "sign up" by providing a username and/or email, but hold off on passwords for now.  

### Do Nots

1. **Do not try to implement a user authentication system with passwords.** When the page refreshes the current user will effectively be signed out. The way you learned this in the previous module relied on the fact that Rails was sending small pieces of data (cookies/sessions) back and forth along with every request and response. Now, we have two separate applications and need to use a slightly different pattern. We'll look at patterns for dealing with client-side auth later in the semester, so you'll have plenty of time to deal with this case.
