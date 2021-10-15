import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialsRoutingModule} from "./materials-routing.module";
import {MaterialAddModalModule} from "../../shared/material-add-modal/material-add-modal.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    MaterialAddModalModule
  ],
  // providers: [
  //   {provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}
  // ]

})
export class MaterialsModule {
}
