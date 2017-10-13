import { Pipe, PipeTransform } from '@angular/core';

import { Car } from "./car"

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cars: Array<Car>, search_text: string): Array<Car> {
    if(!search_text){ return cars }

    search_text = search_text.toLowerCase()
  
    return cars.filter(car => car.make.toLowerCase().includes(search_text) || car.model.toLowerCase().includes(search_text))
  }

}
