import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterOkComponent } from './register-ok/register-ok.component'


const routes: Routes = [
  { path: 'register-ok', component: RegisterOkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
