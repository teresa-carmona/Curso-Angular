import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superhero-child',
  templateUrl: './superhero-child.component.html',
  styleUrls: ['./superhero-child.component.css']
})
export class SuperheroChildComponent  {

  @Output() read = new EventEmitter<string>();


  tryToCallSuperhero = function(name) {
    this.read.emit(name);
  }

}
