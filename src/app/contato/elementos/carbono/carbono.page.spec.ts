import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonoPage } from './carbono.page';

describe('CarbonoPage', () => {
  let component: CarbonoPage;
  let fixture: ComponentFixture<CarbonoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbonoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
