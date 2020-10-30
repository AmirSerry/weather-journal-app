/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = "&appid=yourapikey&units=imperial";
const baseApiUrl = "https://api.openweathermap.org/data/2.5/weather?zip="
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', getWeatherData);

/* Function called by event listener */
function getWeatherData(e){
    const zip =  document.getElementById('zip').value;
    getData(baseApiUrl,zip, apiKey)
    .then(function(data){
        postData('/addweather', data);
    })
    .then(updateUI())
    }

/* Function to GET Web API Data*/
    const getData = async (baseApiUrl, zip, key)=>{

        const res = await fetch(baseApiUrl+zip+key)
        try {
      
          const data = await res.json();
         
          return data;
        }  catch(error) {
          console.log("error", error);
        }
      }

 /* Function to POST data */
 const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        getInfo('/weather', newData);
      }catch(error) {
      console.log("error", error);
      }
  }

/* Function to GET Project Data */

const updateUI = async () => {
    const request = await fetch('/weather');
    const feelings =  document.getElementById('feelings').value;
    try{
      const allData = await request.json();
      document.getElementById('date').innerHTML = "Date: " + newDate;
      if(Object.keys(allData).length>0){
      document.getElementById('temp').innerHTML = "Temprature: " + allData.main.temp;
      document.getElementById('content').innerHTML = "Name: " + allData.name;
      }
      else{
        document.getElementById('temp').innerHTML = "Temprature: Data is not available yet, Try again." ;
        document.getElementById('content').innerHTML = "Name: Data is not available yet, Try again." ;
      }
      document.getElementById('yourfeelings').innerHTML = "Your Feelings: " + feelings ;
    }catch(error){
      console.log("error", error);
    }
  }
  
 
 
