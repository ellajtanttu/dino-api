import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import { DogMoods } from './project.js';
// https://dinoipsum.com/api/?format=text&paragraphs=3


$(document).ready(function(){
  $('#generateButton').click(function(){
    let promise = new Promise(function(resolve, reject){

    
      let request = new XMLHttpRequest();
      const url = `https:dinoipsum.com/api/?format=text&paragraphs=3`
      request.onload =function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response)
        }
      }
  
    request.open("GET", url, true);
    request.send();
  })   
  });
});

/*
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    clearFields();
    let promise = WeatherService.getWeather(city);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
*/