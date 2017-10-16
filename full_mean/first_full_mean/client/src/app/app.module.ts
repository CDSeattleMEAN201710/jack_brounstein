import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarsDetailComponent } from './cars/cars-detail/cars-detail.component';
import { CarsCreateComponent } from './cars/cars-create/cars-create.component';
import { FilterPipe } from './cars/filter.pipe';

import { CarService } from "./cars/car.service"

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsDetailComponent,
    CarsCreateComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
