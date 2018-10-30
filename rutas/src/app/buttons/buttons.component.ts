import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  navigateProgramaticallyA() {
    this.router.navigate(['A']);
  }

  navigateProgramaticallyB() {
    this.router.navigate(['B']);
  }

  navigateProgramaticallyC() {
    this.router.navigate(['C']);
  }

}
