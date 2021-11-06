import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AuthGuard} from "../shared/guards/auth.guard";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:
      [
        {
          path: 'home',
          loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
          canActivate: [AuthGuard]
        },
        {
          path: 'materials',
          loadChildren: () => import('./materials/materials.module').then(m => m.MaterialsModule),
          canActivate: [AuthGuard]
        },
        {
          path: 'scores',
          loadChildren: () => import('./scores/scores.module').then(m => m.ScoresModule),
          canActivate: [AuthGuard]
        },
        {
          path: 'employees',
          loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
          canActivate: [AuthGuard]
        }
      ]
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatMenuModule,
  ]
})
export class DashboardRoutingModule {
}
