import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScoresRoutingModule} from "./scores-routing.module";
import {ScoresComponent} from "./scores.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [ScoresComponent],
  imports: [
    CommonModule,
    ScoresRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class ScoresModule { }
