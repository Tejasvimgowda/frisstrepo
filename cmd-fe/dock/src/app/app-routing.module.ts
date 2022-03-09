import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'CMD', loadChildren: () => import('./cmd/cmd.module').then(m => m.CmdModule) },
  { path: '', redirectTo: 'CMD', pathMatch: 'full' },

  { path: '**', redirectTo: 'CMD' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
