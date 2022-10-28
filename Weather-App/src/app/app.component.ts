import { Component, OnInit } from '@angular/core';
import { Geo } from './models/geo.models';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private weatherService: WeatherService){

  }


  weatherData?: WeatherData;
  geoData!: Geo;
  cityName: string = 'Zlín';

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
 
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.weatherService.getCoordinates(cityName).subscribe({
      next: (response: any) => {
        this.geoData = response;
        console.log(response[0].lat);
        console.log(response.coord);

        this.weatherService.getWeatherData(response[0].lat, response[0].lon).subscribe({
          next: (response) => {
            this.weatherData = response;
    
            console.log(response);
          }
        });
      }
    });
  }


  title = 'Weather-App';
}
