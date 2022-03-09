import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrescriptionsComponent } from './add-edit-prescriptions.component';

describe('AddEditPrescriptionsComponent', () => {
  let component: AddEditPrescriptionsComponent;
  let fixture: ComponentFixture<AddEditPrescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPrescriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
