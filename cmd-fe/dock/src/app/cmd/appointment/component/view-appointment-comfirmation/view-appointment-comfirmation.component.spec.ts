import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentComfirmationComponent } from './view-appointment-comfirmation.component';

describe('ViewAppointmentComfirmationComponent', () => {
  let component: ViewAppointmentComfirmationComponent;
  let fixture: ComponentFixture<ViewAppointmentComfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentComfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentComfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
