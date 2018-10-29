import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-hi2',
  templateUrl: './say-hi2.component.html',
  styleUrls: ['./say-hi2.component.css']
})
export class SayHi2Component  {

  @Output() read = new EventEmitter<string>();

  confirmRead = function () {
    this.read.emit("Message has been read");
  }

}
