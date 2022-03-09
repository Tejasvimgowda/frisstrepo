import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentDoctorDetailsComponent } from './view-appointment-doctor-details.component';

describe('ViewAppointmentDoctorDetailsComponent', () => {
  let component: ViewAppointmentDoctorDetailsComponent;
  let fixture: ComponentFixture<ViewAppointmentDoctorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentDoctorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentDoctorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
