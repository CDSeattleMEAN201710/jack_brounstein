import { Component, OnInit } from '@angular/core';

import { Car } from "./car"

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  first_name: string
  cars: Array<Car>

  constructor() { }

  ngOnInit() {
    this.first_name = "Jack"
    this.cars = [
      {
        make: "Ford",
        model: "Fiesta",
        year: 2005,
        numbers: [1,2,3]
      },
      {
        make: "Honda",
        model: "Civic",
        year: 2013,
        numbers: [5,6,7,8]
      }
    ]
  }

}
