# React Book App

This application uses goodreads api to look for books by title, author or isbn code.

This project was bootstrapped with `create-react-app` and deployed live at

https://mahadesh2016.github.io/react-book-app-master/

# Running the application locally

**Prerequisites:** You need to have Node + NPM installed.

**Required Environment Variables:**

`REACT_APP_API_KEY` : Goodreads API Key you can get from [here](https://www.goodreads.com/api/keys).

Update the key in the src/keys file .

Having done that, here is how to run the application locally in development mode.

**Clone the repo:**

    git clone https://github.com/Mahadesh2016/react-book-app-master.git

**Install dependencies:**

    npm install

**Starting the application in development mode:**

    npm start

# Building the application:

To build the production assets, run

    npm run build

# Testing the App:

Right now there are three test cases.
(1) App.test.js (app renders without crashing) // This only checks shallow rendering
(2) BooksAction.test.js // These test cases test the action creators
A. it should create FETCH_BOOKS action.
B. it should create GET_DESCRIPTION action.

To run the test cases use the following command :  
 npm run test

# Features In Current Version:

1. Search for books by title, author.
2. Displays upto 20 search results in cards.
3. Displays only title, author and average rating .
4. See the description and other details by clicking on the title .
