# NYT React Search

### Author:

Jina Li

### What the project does?

Work in Progress
1.front end layout with Components

### Where users can get help with your project?

Please email me at jinali.berkeley@gmail.com

Also visit [npmjs.com](https://www.npmjs.com/) for info on API packages and [create-react-app](https://github.com/facebook/create-react-app) for details on creating react applications

### How users can get started with the project?
See below

# Create React Express App
copied from activities
```
server.js
Procfile
package.json
nodemon.json
scripts folder
```

development code
```
client folder
controllers folder
models folder
routes folder
```

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
``

After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```

2. Add and commit all changes to git

3. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!
