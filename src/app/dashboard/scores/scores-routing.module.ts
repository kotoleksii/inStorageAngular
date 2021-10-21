import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ScoresComponent} from "./scores.component";

const routes: Routes = [
  {
    path: '',
    component: ScoresComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ScoresRoutingModule {
}
