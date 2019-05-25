import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oficina1Page } from './oficina1.page';

describe('Oficina1Page', () => {
  let component: Oficina1Page;
  let fixture: ComponentFixture<Oficina1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oficina1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oficina1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
