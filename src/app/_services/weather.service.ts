import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherInfo(location) {
    return this.http.get(
      `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=${environment.apiKey}&query=${location}`
    );
  }
}
