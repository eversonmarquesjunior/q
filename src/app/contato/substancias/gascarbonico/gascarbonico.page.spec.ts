import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GascarbonicoPage } from './gascarbonico.page';

describe('GascarbonicoPage', () => {
  let component: GascarbonicoPage;
  let fixture: ComponentFixture<GascarbonicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GascarbonicoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GascarbonicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
