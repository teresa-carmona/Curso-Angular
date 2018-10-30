import { Injectable } from '@angular/core';

@Injectable()
export class LicencePlateAuthorizationService {
  //these could be configured
  oddAllowed: boolean = true;
  evenAllowed: boolean = false;
  isAuthorized: boolean;

  authorize(numberPlate): Promise<string> {
    if (numberPlate%2==0){
      this.isAuthorized = this.evenAllowed;
    } else {
      this.isAuthorized = this.oddAllowed;
    }
    if (this.isAuthorized) {
      // return a promise that has got the string 'allowed to drive in the city center' inside
      return Promise.resolve("allowed to drive in the city center");
    } else {
      // return a promise that has got the string 'NOT allowed to drive in the city center' inside
      return Promise.reject("NOT allowed to drive in the city center");
    };
  }
}
