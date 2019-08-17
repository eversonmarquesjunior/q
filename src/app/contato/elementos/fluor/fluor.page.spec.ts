import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluorPage } from './fluor.page';

describe('FluorPage', () => {
  let component: FluorPage;
  let fixture: ComponentFixture<FluorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
