import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AddAppointmentComponent } from './component/add-appointment/add-appointment.component';
import { ViewAppointmentComponent } from './component/view-appointment/view-appointment.component';
import { ViewScheduleComponent } from './component/view-schedule/view-schedule.component';
import { ViewAppointmentComfirmationComponent } from './component/view-appointment-comfirmation/view-appointment-comfirmation.component';
import { ViewAppointmentSummaryComponent } from './component/view-appointment-summary/view-appointment-summary.component';
import { ViewAppointmentPatientDetailsComponent } from './component/view-appointment-summary/component/view-appointment-patient-details/view-appointment-patient-details.component';
import { ViewAppointmentDoctorDetailsComponent } from './component/view-appointment-summary/component/view-appointment-doctor-details/view-appointment-doctor-details.component';
import { ViewEditAppointmentCommentsComponent } from './component/view-appointment-summary/component/view-edit-appointment-comments/view-edit-appointment-comments.component';
import { ViewEditAppointmentVitalsComponent } from './component/view-appointment-summary/component/view-edit-appointment-vitals/view-edit-appointment-vitals.component';
import { ViewAllPrescriptionsComponent } from './component/view-appointment-summary/component/view-all-prescriptions/view-all-prescriptions.component';
import { AddEditPrescriptionsComponent } from './component/view-appointment-summary/component/view-all-prescriptions/component/add-edit-prescriptions/add-edit-prescriptions.component';
import { ViewAppointmentTestComponent } from './component/view-appointment-summary/component/view-appointment-test/view-appointment-test.component';
import { ViewAppointmentRecommendationsComponent } from './component/view-appointment-summary/component/view-appointment-recommendations/view-appointment-recommendations.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [
  AddAppointmentComponent,
  ViewAppointmentComponent,
  ViewScheduleComponent,
  ViewAppointmentComfirmationComponent,
  ViewAppointmentSummaryComponent,
  ViewAppointmentPatientDetailsComponent,
  ViewAppointmentDoctorDetailsComponent,
  ViewEditAppointmentCommentsComponent,
  ViewEditAppointmentVitalsComponent,
  ViewAllPrescriptionsComponent,
  AddEditPrescriptionsComponent,
  ViewAppointmentTestComponent,
  ViewAppointmentRecommendationsComponent
]
@NgModule({
  declarations: [...COMPONENTS
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    SharedModule
  ],
  exports: [...COMPONENTS]
})
export class AppointmentModule { }
