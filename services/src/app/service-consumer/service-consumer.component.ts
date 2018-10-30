import { Component, OnInit } from '@angular/core';
import { DiceService } from '../dice-service.service';
import { LicencePlateAuthorizationService } from './../licencePlateAuthorization.service';

@Component({
  selector: 'app-service-consumer',
  templateUrl: './service-consumer.component.html',
  styleUrls: ['./service-consumer.component.css']
})
export class ServiceConsumerComponent implements OnInit {

  throwResult: number;
  phrase: string;
  allowedPromise = ' ';


  constructor(private diceServ : DiceService, private licenseServ : LicencePlateAuthorizationService) { }

  checkAccess(numberPlate) {
    this.licenseServ.authorize(numberPlate)
    .then((val: string) =>
    {
      this.allowedPromise = `Congratulations!!! ${val}` ;
    })
    .catch((val: string) => 
    {
      this.allowedPromise = `Sorry ${val}`;
    }
    );
  }


  showPhrase(language:number) {
    if (language == 1) {
      this.phrase = this.diceServ.getPhrase();
    }
    else {
      this.phrase = this.diceServ.dameFrase();
    }
  }


  ngOnInit() {
    this.throwResult = this.diceServ.throwDice();
  }

}
