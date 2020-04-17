import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterbuttonComponent } from './masterbutton.component';

describe('MasterbuttonComponent', () => {
  let component: MasterbuttonComponent;
  let fixture: ComponentFixture<MasterbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
