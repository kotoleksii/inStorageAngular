import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialsRoutingModule} from "./materials-routing.module";
import {MaterialAddModalModule} from "../../shared/material-add-modal/material-add-modal.module";
import {ConfirmDialogModule} from "../../shared/confirm-dialog/confirm-dialog.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    MaterialAddModalModule,
    ConfirmDialogModule,
  ],
  exports: [],
  // providers: [
  //   {provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}
  // ]

})
export class MaterialsModule {
}
