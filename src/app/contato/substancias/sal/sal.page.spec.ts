import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalPage } from './sal.page';

describe('SalPage', () => {
  let component: SalPage;
  let fixture: ComponentFixture<SalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
