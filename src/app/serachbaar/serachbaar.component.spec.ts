import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachbaarComponent } from './serachbaar.component';

describe('SerachbaarComponent', () => {
  let component: SerachbaarComponent;
  let fixture: ComponentFixture<SerachbaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachbaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachbaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
