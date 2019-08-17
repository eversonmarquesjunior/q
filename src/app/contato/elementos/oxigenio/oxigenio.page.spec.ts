import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxigenioPage } from './oxigenio.page';

describe('OxigenioPage', () => {
  let component: OxigenioPage;
  let fixture: ComponentFixture<OxigenioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxigenioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxigenioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
