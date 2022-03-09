import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentSummaryComponent } from './view-appointment-summary.component';

describe('ViewAppointmentSummaryComponent', () => {
  let component: ViewAppointmentSummaryComponent;
  let fixture: ComponentFixture<ViewAppointmentSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
