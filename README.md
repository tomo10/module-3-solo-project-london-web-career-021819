# Module 3 Solo Project Guidelines

You're going to be building a **SPA** or *S*ingle *P*age *A*pplication.  Your frontend will be built with HTML, CSS, and JavaScript. You will also be tasked with first using a `json-server` with a `db.json` file as a MVP backend, before constructing your own backend API built with Ruby on Rails. The frontend application will communicate with the backend by making requests and receiving responses. This is a really exciting moment, the whole course up until this point is coming together!

Building out each feature you want for your application will be challenging, but you all are awesome and can do it. Remember to build iteratively and begin with a clear picture of an MVP.

### Requirements

1. Must have full CRUD for one resource using `json-server` before adding an additional resource with Rails. For example, if we were building Instagram, we would create have the ability to create a photo, see a photo, update attributes of the photo, or delete the photo, storing this data in a `db.json` file. Once that functionality is achieved, we would then create our Rails backend to replace the `json-server` before moving forward and adding any additional resources (such as likes and comments).

2. **No user authentication with passwords. When the page refreshes the current user will effectively be signed out**. The way you learned this in the previous module relied on the fact that Rails was sending small pieces of data (cookies/sessions) back and forth along with every request and response. Now, we have two separate applications and need to use a slightly different pattern. We'll look at patterns for dealing with client-side auth later in the semester, so you'll have plenty of time to deal with this case. 
   
   If your application requires a user model you can have users "sign in" or "sign up" by providing a username and/or email, but hold off on passwords for now.  

3. jQuery is often helpful to use for DOM traversal and DOM manipulation and you are welcome, though not required, to use it. Remember that what you can do with jQuery you can do with vanilla JavaScript ( [You Might Not Need jQuery](http://youmightnotneedjquery.com/) ) if often a little less elegantly.  
   
   Having said that we require that you use `fetch` and not `$.ajax`, `$.get` etc. Fetch is built into JavaScript now and you should get used to using it and dealing with some of its quirks!  Going forward, we don't want you to get the wrong idea that you need to import the entire jQuery library to make a single AJAX request.


## Example Project Setup (once you begin your Rails backed)

[This repository](https://github.com/learn-co-curriculum/mod3-project-week-setup-example) goes through the first few steps of setting up an example project for both the frontend and backend applications.  **Please spend some time looking through this before getting started**. If your question (ex: "How do i set up the `rack-cors` gem?") can be answered by reading this repository, you will be directed there.