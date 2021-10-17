import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmDialogComponent} from "./confirm-dialog.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [ConfirmDialogComponent],
})
export class ConfirmDialogModule { }
