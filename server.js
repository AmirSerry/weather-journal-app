// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port, listening);
 function listening(){
    console.log(`running on localhost: ${port}`);
  };

  // Callback function to complete GET '/weather'
  app.get('/weather', function (request, response) {
    response.send(projectData);
  });

  // Post Route
  app.post('/addweather', addWeather );

  function addWeather (req, res){
    projectData = req.body;
 }
