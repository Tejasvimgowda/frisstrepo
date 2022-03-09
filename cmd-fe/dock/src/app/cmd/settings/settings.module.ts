import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ViewSettingsComponent } from './components/view-settings/view-settings.component';
import { EditSettingsComponent } from './components/edit-settings/edit-settings.component';


@NgModule({
  declarations: [
    ViewSettingsComponent,
    EditSettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
