import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployeesComponent} from "./employees.component";

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EmployeesRoutingModule {
}
