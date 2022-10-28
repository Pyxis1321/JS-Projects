// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // weatherApiBaseUrl: 'https://open-weather13.p.rapidapi.com/city/',
  // XRapidAPIHostHeaderName: 'X-RapidAPI-Key',
  // XRapidAPIHostHeaderValue: 'community-open-weather-map.p.rapidapi.com',
  // XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  // XRapidAPIKeyHeaderValue: '088ff2f38emsh846e3954b4c8436p12abcejsn58475a6cae28',

  api:{
    // TODO: set your api key
    key: '31d98fb001aaf0be4673c857cc406bac',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather?units=metric',
    geoBaseUrl: 'http://api.openweathermap.org/geo/1.0/direct' 
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
