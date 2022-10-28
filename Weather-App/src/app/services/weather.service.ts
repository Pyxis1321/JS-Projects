import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Geo } from '../models/geo.models';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // getWeatherData1(cityName: string): Observable<WeatherData>{
  //   return this.http.get<WeatherData>(environment.weatherApiBaseUrl+cityName, {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
  //     .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
  //   })
  // }

  getWeatherData(lat: number, lon:number): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.api.baseUrl, {
      params: new HttpParams()
        .set('lat', lat)
        .set('lon', lon)
        .set('appid', environment.api.key)
    })
  }

  getCoordinates(cityName: string): Observable<Geo>{
    return this.http.get<Geo>(environment.api.geoBaseUrl, {
      params: new HttpParams()
        .set('q', cityName)
        .set('appid', environment.api.key)
    })
  }
}
