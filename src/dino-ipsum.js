/*export class TestObject {
  constructor(number) {
    this.number = 3;
  }
}

export default class WeatherService {
  static getWeather(city) {
     
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

*/


export default class DinoText {
  static getText(bool)
}