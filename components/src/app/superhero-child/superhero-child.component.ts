import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { Superhero } from '.././superhero';

@Component({
  selector: 'app-superhero-child',
  templateUrl: './superhero-child.component.html',
  styleUrls: ['./superhero-child.component.css']
})
export class SuperheroChildComponent  {

  @Output() read = new EventEmitter<string>();
  @Input() superheroList: Superhero[];


  tryToCallSuperhero = function(name) {
    this.read.emit(name);
  }

}
