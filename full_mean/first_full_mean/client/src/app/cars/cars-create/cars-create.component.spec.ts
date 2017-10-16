import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCreateComponent } from './cars-create.component';

describe('CarsCreateComponent', () => {
  let component: CarsCreateComponent;
  let fixture: ComponentFixture<CarsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
