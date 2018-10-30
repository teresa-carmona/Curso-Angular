import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapitalizeService {

  constructor() { }

  transformInService(value: string): string {
    if (!value) return value;
    return value.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
  }
}
