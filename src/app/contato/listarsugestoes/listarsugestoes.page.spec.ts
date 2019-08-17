import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarsugestoesPage } from './listarsugestoes.page';

describe('ListarsugestoesPage', () => {
  let component: ListarsugestoesPage;
  let fixture: ComponentFixture<ListarsugestoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarsugestoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarsugestoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
