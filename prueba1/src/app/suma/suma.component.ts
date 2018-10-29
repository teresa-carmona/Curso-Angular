import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  value = 0;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.value++;
  }

  subtract() {
    this.value--;
  }

}

