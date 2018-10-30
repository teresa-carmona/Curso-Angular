import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RESTCountriesService {
  BASEURI = "https://restcountries.eu/rest/v2";

  constructor(private httpService: HttpClient) { }

  getCountry( countryName: string):Observable<any> {
    return this.httpService.get(`${this.BASEURI}/name/${countryName}`);
  }
}
