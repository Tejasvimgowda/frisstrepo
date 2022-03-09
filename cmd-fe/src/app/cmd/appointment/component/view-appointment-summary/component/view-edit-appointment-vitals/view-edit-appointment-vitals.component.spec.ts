import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditAppointmentVitalsComponent } from './view-edit-appointment-vitals.component';

describe('ViewEditAppointmentVitalsComponent', () => {
  let component: ViewEditAppointmentVitalsComponent;
  let fixture: ComponentFixture<ViewEditAppointmentVitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditAppointmentVitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditAppointmentVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
