import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationscreenComponent } from './informationscreen.component';

describe('InformationscreenComponent', () => {
  let component: InformationscreenComponent;
  let fixture: ComponentFixture<InformationscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
