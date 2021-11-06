import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {NotifierModule} from "angular-notifier";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MaterialActionModalModule} from "./shared/modals/material-action-modal/material-action-modal.module";
import {ConfirmDialogModalModule} from "./shared/modals/confirm-dialog-modal/confirm-dialog-modal.module";
import {MaterialTransferModalModule} from "./shared/modals/material-transfer-modal/material-transfer-modal.module";

@NgModule({
  declarations: [
    AppComponent,
    // TableFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    NotifierModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MaterialActionModalModule,
    MaterialTransferModalModule,
    ConfirmDialogModalModule,
    MatDialogModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
