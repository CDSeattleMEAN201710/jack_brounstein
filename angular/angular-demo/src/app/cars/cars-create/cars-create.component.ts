import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Car } from "./../car"

@Component({
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent implements OnInit {
  new_car: Car
  @Output() add_a_car = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.new_car = new Car
  }

  create_car() {
    // this.cars.push(this.new_car)
    console.log(this.new_car)
    this.add_a_car.emit(this.new_car)
    this.new_car = new Car
  }

}
