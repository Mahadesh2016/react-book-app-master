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
2. Displays favourites books searched by text "programming languages". This can be modified to display favourite books queried by that text but note that mock data for text has been created using the text "programming languages". so while running the tests modify the text to "programming languages".
   The search key is present in src/keys file .
3. Displays upto 20 search results in cards.
4. Displays only title, author and average rating .
5. See the description and other details by clicking on the title .

# Corrections & Future works

1. The api call might be slow. A Spinner needs to be displayed to check if there are any api calls in progress and display the data once the api completed.

2. More test cases have to be written.
