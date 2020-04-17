import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapopupComponent } from './datapopup.component';

describe('DatapopupComponent', () => {
  let component: DatapopupComponent;
  let fixture: ComponentFixture<DatapopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
