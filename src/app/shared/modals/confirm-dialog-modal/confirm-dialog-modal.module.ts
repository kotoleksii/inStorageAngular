import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmDialogModalComponent} from "./confirm-dialog-modal.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [ConfirmDialogModalComponent],
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
  exports: [ConfirmDialogModalComponent],
})
export class ConfirmDialogModalModule { }
