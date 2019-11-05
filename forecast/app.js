const request = require('request');
const url = 'https://api.darksky.net/forecast/30f2fd81e81e9e71ca10c383c58caf0a/37.8267,-122.4233?units=si';

request( {url : url, json : true}, (err, response)=>{
  if(err) {
    console.log('Error occured : ', err);
  }
  else {
    const data = response.body.currently;
    console.log(`It is currently  ${data.temperature} degrees out. There is a ${data.precipProbability} of rain`);
  }
});