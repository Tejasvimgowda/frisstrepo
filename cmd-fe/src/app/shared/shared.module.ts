import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoginComponent } from './components/login/login.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


const COMPONENTS = [
  LoginComponent,
    TopHeaderComponent,SidebarComponent
];

const PIPES: never[] = [];

@NgModule({
  declarations: [  ...COMPONENTS, ...PIPES, ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [ ...COMPONENTS, ...PIPES],
})
export class SharedModule { }
