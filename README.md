# Bidder

This is a real-time auction and bidding app built with the MERN stack (MongoDB, Express, React, and Node.js) and socket.io. Users can participate in live auctions and place bids in real-time.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js >= 18.12.1
- NPM >= 8.19.2
- MongoDB

## Installation

  1. Clone the repository

    $ git clone https://github.com/

  2. Go to `frontend` and `backend` directory one by one and install dependencies with command shown at 3rd step.

    $ cd frontend/
    // And
    $ cd backend/


  3. Install the dependencies

    $ npm install

## Configure App

You have to set the environment variables of your configuration before starting the app.

### 1. Environment variables for `backend`

Create a `.env` file at `Bidder/frontend/` directory and set the following environment variables starting with prefix `VITE_`

    VITE_BASE_API_URL={api_url_of_the_backend} // e.g: http://localhost:8000/api
    VITE_SOCKET_URL={url_of_backend} // e.g: ws:localhost:8000

### 2. Environment variables for `backend`

Create a `.env` file at `Bidder/backend/` directory and set the following environment variables.

    PORT=8000 // You can set any port number that is available but make sure to correctly include it in client environment variables.
    BASE_URL_PREFIX={api_prefix} // e.g: `/api`
    DB_NAME=Bidder
    DB_CONNECTION_STRING={your_mongodb_connection_uri}
    SALT=10 // 10 is the recommended salt here.
    SECRET={your_jwt_secret} // e.g: shhhh123.
    ORIGIN={where_client_is_running} // e.g: http://localhost:3000
    DEFAULT_AVATAR={cloud_url_for_an_image} // Cloudinary is recommended.
    CLOUDINARY_CLOUD_NAME={your_cloudinary_cloud_name} // Shown in cloudinary dashboard.
    CLOUDINARY_API_KEY={your_cloudinary_api_key} // Shown in cloudinary dashboard.
    CLOUDINARY_API_SECRET={your_cloudinary_api_secret} // Shown in cloudinary dashboard.


## Running The Project
### Start backend (Node API)

    $ cd Bidder/backend // go to backend directory
    $ npm run dev // run backend with hot reloading.
    // or you can run the backend with standard command
    $ node server.js

### Start frontend (React app [VITE])

    $ cd  Bidder/frontend // go to frontend directory
    $ npm run dev

## Deployment

The app can be deployed to a hosting platform such as Render or Heroku.

## Built With

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Socket.io](https://socket.io/)
- [cloudinary.com](https://cloudinary.com/)
