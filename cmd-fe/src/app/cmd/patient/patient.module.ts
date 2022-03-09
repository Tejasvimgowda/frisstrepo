import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientsDashboardComponent } from './components/patients-dashboard/patients-dashboard.component';
import { ViewPatientComponent } from './components/view-patient/view-patient.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CmdModule } from '../cmd.module';


@NgModule({
  declarations: [
    PatientsDashboardComponent,
    ViewPatientComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule,
    CmdModule
  ]
})
export class PatientModule { }
