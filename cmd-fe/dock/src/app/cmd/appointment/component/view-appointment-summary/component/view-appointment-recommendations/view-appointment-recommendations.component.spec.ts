import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentRecommendationsComponent } from './view-appointment-recommendations.component';

describe('ViewAppointmentRecommendationsComponent', () => {
  let component: ViewAppointmentRecommendationsComponent;
  let fixture: ComponentFixture<ViewAppointmentRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentRecommendationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
