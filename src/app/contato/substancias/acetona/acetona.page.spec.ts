import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcetonaPage } from './acetona.page';

describe('AcetonaPage', () => {
  let component: AcetonaPage;
  let fixture: ComponentFixture<AcetonaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcetonaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcetonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
