import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1buttonComponent } from './child1button.component';

describe('Child1buttonComponent', () => {
  let component: Child1buttonComponent;
  let fixture: ComponentFixture<Child1buttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1buttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1buttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
