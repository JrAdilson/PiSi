import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oficina2Page } from './oficina2.page';

describe('Oficina2Page', () => {
  let component: Oficina2Page;
  let fixture: ComponentFixture<Oficina2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oficina2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oficina2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
