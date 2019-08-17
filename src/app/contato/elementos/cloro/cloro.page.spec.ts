import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloroPage } from './cloro.page';

describe('CloroPage', () => {
  let component: CloroPage;
  let fixture: ComponentFixture<CloroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
