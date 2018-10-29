import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css']
})
export class DomComponent implements OnInit {

  inDOM = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.inDOM = !this.inDOM;
  }

}
