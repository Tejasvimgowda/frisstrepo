import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../shared/components/login/login.component';
import { ViewAppointmentComponent } from './appointment/component/view-appointment/view-appointment.component';
import { CmdComponent } from './cmd.component';
import { CmdModule } from './cmd.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsDashboardComponent } from './patient/components/patients-dashboard/patients-dashboard.component';
import { ViewPatientComponent } from './patient/components/view-patient/view-patient.component';
import { EditSettingsComponent } from './settings/components/edit-settings/edit-settings.component';
import { ViewSettingsComponent } from './settings/components/view-settings/view-settings.component';

const routes: Routes = [
  {path:'',
  component:CmdComponent,
  children:[
    {
      path:'landing',
      component:LoginComponent
    },
    {
      path:'',
      redirectTo:'landing',
      pathMatch:'full',
    },
    {
      path:'dashboard',
      component:DashboardComponent
    },
    {
      path:'patients-dashboard',
      component:PatientsDashboardComponent
    },
    {
      path:'view-patient',
      component:ViewPatientComponent
    },
    {
      path:'view-settings',
      component:ViewSettingsComponent
    },
    {
      path:'edit-settings',
      component:EditSettingsComponent
    },
    {
      path:'view-appointment',
      component:ViewAppointmentComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmdRoutingModule { }
