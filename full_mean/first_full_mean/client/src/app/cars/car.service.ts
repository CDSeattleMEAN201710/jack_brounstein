import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"

import { Car } from "./car"

@Injectable()
export class CarService {

  constructor(private http: Http) { }

  get_all_cars(){
    return this.http.get("/get_all_cars").map(data => data.json()).toPromise()
  }

  create(new_car: Car){
    return this.http.post("/create", new_car).map(data => data.json()).toPromise()
  }

}
