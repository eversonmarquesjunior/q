import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinagrePage } from './vinagre.page';

describe('VinagrePage', () => {
  let component: VinagrePage;
  let fixture: ComponentFixture<VinagrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinagrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinagrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
