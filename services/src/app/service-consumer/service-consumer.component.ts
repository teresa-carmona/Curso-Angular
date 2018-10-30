import { Component, OnInit } from '@angular/core';
import { DiceService } from '../dice-service.service';

@Component({
  selector: 'app-service-consumer',
  templateUrl: './service-consumer.component.html',
  styleUrls: ['./service-consumer.component.css']
})
export class ServiceConsumerComponent implements OnInit {

  throwResult: number;
  phrase: string;

  constructor(private diceServ : DiceService) { }

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
