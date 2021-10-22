import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialsRoutingModule} from "./materials-routing.module";
import {MaterialAddModalModule} from "../../shared/modals/material-add-modal/material-add-modal.module";
import {ConfirmDialogModalModule} from "../../shared/modals/confirm-dialog-modal/confirm-dialog-modal.module";
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
import {MatTooltipModule} from "@angular/material/tooltip";
import {MaterialTransferModalModule} from "../../shared/modals/material-transfer-modal/material-transfer-modal.module";


@NgModule({
  declarations: [MaterialsComponent],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    MaterialAddModalModule,
    MaterialTransferModalModule,
    ConfirmDialogModalModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    QrCodeModule,
    MatTooltipModule
  ],
  exports: [],
  // providers: [
  //   {provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}
  // ]

})
export class MaterialsModule {
}
