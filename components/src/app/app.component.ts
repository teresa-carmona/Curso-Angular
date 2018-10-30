import { Component } from '@angular/core';
import { Superhero } from './superhero';

@Component({
  selector: 'app-root',
  template: `<h1>Father component</h1>
  <app-say-hi name="Nelson Mandela"></app-say-hi>
  <br><br>
  <app-say-hi [name]="famous.toUpperCase()"></app-say-hi>
  <app-say-hi2 name="Nelson Mandela" (read)=doSomething($event)></app-say-hi2>
  <app-superhero-child [superheroList]="batman" (read)=callSuperhero($event)></app-superhero-child>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components';
  famous = "rafa nadal";
  batman:Superhero = {name:'batman', alterEgo:'bruce wayne', superpowers:['millionaire']};
  superheroList:Superhero[] = [{name:'batman', alterEgo:'bruce wayne', superpowers:['millionaire']},
  {name:'superman', alterEgo:'clark kent', superpowers:['flying', 'x-ray']},
  {name:'wolverine', alterEgo:'logan', superpowers:['self healing', 'iron claws']}];
  times = 0;
  

  doSomething = function(message) {
    alert(message);
  }

  callSuperhero = function(superhero) {
    if (this.times > 0 ) {
      alert ("A hero has already been called");
    }
    else {
      alert ("Calling superhero " + superhero);
    }
    this.times++;
  }
}
