import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPrescriptionsComponent } from './view-all-prescriptions.component';

describe('ViewAllPrescriptionsComponent', () => {
  let component: ViewAllPrescriptionsComponent;
  let fixture: ComponentFixture<ViewAllPrescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPrescriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
