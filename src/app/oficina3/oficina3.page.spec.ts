import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oficina3Page } from './oficina3.page';

describe('Oficina3Page', () => {
  let component: Oficina3Page;
  let fixture: ComponentFixture<Oficina3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oficina3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oficina3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
