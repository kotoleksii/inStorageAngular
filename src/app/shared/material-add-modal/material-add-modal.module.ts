import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialAddModalComponent} from "./material-add-modal.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";



@NgModule({
  declarations: [MaterialAddModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  exports: [MaterialAddModalComponent]
})
export class MaterialAddModalModule { }
