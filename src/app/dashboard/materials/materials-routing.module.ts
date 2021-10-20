import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MaterialsComponent} from "./materials.component";


const routes: Routes = [
  {
    path: '',
    component: MaterialsComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class MaterialsRoutingModule {
}
