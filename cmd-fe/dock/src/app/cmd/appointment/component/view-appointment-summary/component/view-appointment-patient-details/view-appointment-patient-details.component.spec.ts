import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentPatientDetailsComponent } from './view-appointment-patient-details.component';

describe('ViewAppointmentPatientDetailsComponent', () => {
  let component: ViewAppointmentPatientDetailsComponent;
  let fixture: ComponentFixture<ViewAppointmentPatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentPatientDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
