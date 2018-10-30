import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  throwDice() {
    return Math.floor(6*Math.random() + 1);
  }

  getPhrase() {
    return `When the going gets tough, the tough get going`;
  }

  dameFrase() {
    return `A buenas horas, mangas verdes`;
  }
}
