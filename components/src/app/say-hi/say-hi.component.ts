import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-hi',
  template: 'Hi {{name}}',
  styleUrls: ['./say-hi.component.css']
})
export class SayHiComponent  {

  @Input() name: string;

}
