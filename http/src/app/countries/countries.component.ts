import { Component, OnInit } from '@angular/core';
import {RESTCountriesService} from '.././restcountries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countryName: string;
  capital: string;

  constructor(private countriesService: RESTCountriesService) { }

  showCapital() {
    this.countriesService.getCountry(this.countryName).subscribe(data => this.capital = data[0].capital);
  }

  ngOnInit() {
  }

}
