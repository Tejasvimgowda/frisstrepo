import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditAppointmentCommentsComponent } from './view-edit-appointment-comments.component';

describe('ViewEditAppointmentCommentsComponent', () => {
  let component: ViewEditAppointmentCommentsComponent;
  let fixture: ComponentFixture<ViewEditAppointmentCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditAppointmentCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditAppointmentCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
