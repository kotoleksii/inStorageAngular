import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialTransferModalComponent} from "./material-transfer-modal.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [MaterialTransferModalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [MaterialTransferModalComponent]
})
export class MaterialTransferModalModule {
}
