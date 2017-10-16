import { Component, OnInit } from '@angular/core';

import { Car } from "./car"
import { CarService } from "./car.service"

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  first_name: string
  cars: Array<Car>

  constructor(private car_service: CarService) { }

  ngOnInit() {
    this.first_name = "Jack"

    this.get_all_cars()
  }

  get_all_cars() {
    this.car_service.get_all_cars()
      .then(cars => this.cars = cars)
      .catch(err => console.log("get all cars error", err))
  }

  create_car(new_car: Car) {
    // this.cars.push(new_car)
    this.car_service.create(new_car)
      .then(() => {console.log("Car created?"); this.get_all_cars() })
      .catch(err => console.log("create car error", err))
  }

}
