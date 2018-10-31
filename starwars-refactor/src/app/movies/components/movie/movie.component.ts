import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit() {
  }

}
