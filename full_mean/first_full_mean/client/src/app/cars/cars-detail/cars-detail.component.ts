import { Component, OnInit, Input } from '@angular/core';

import { Car } from "./../car"

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {
  @Input() this_car: Car

  constructor() { }

  ngOnInit() {
    
  }

}
