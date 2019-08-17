import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HidrogenioPage } from './hidrogenio.page';

describe('HidrogenioPage', () => {
  let component: HidrogenioPage;
  let fixture: ComponentFixture<HidrogenioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HidrogenioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HidrogenioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
