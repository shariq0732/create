import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childtable1Component } from './childtable1.component';

describe('Childtable1Component', () => {
  let component: Childtable1Component;
  let fixture: ComponentFixture<Childtable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childtable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childtable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
