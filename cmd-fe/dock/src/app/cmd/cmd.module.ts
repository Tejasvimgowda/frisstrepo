import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmdRoutingModule } from './cmd-routing.module';
import { CmdComponent } from './cmd.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsDashboardComponent } from './patient/components/patients-dashboard/patients-dashboard.component';
import { ViewPatientComponent } from './patient/components/view-patient/view-patient.component';
import { AppointmentModule } from './appointment/appointment.module';

const component = [ CmdComponent,DashboardComponent,PatientsDashboardComponent,ViewPatientComponent]

@NgModule({
  declarations: [...component
  ],
  imports: [
    CommonModule,
    CmdRoutingModule,
    SharedModule,
    AppointmentModule
  ],
  exports: [...component]
})
export class CmdModule { }
