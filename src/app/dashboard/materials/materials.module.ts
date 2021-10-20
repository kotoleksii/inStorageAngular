import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialsRoutingModule} from "./materials-routing.module";
import {MaterialAddModalModule} from "../../shared/material-add-modal/material-add-modal.module";
import {ConfirmDialogModule} from "../../shared/confirm-dialog/confirm-dialog.module";
import {MaterialsComponent} from "./materials.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {QrCodeModule} from "ng-qrcode";


@NgModule({
  declarations: [MaterialsComponent],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    MaterialAddModalModule,
    ConfirmDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    QrCodeModule
  ],
  exports: [],
  // providers: [
  //   {provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}
  // ]

})
export class MaterialsModule {
}
