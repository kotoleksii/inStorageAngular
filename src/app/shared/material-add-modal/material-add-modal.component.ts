import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NotifierService} from "angular-notifier";
import {MaterialService} from "../services/material.service";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
// @ts-ignore
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-material-add-modal',
  templateUrl: './material-add-modal.component.html',
  styleUrls: ['./material-add-modal.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})


export class MaterialAddModalComponent implements OnInit {

  date = new FormControl(moment("2020/02/12", "YYYY/MM/DD"));


  public addMaterialForm = this.fb.group({
    title: ['', Validators.required],
    inventory_number: ['', Validators.required],
    date_start: ['', Validators.required],
    type: ['', Validators.required],
    amount: ['', Validators.required],
    price: ['', Validators.required],
    sum: ['', Validators.required],
    employee_id: ['', Validators.required],
    score_id: ['', Validators.required],
  });

  public materialItemId: number = 0;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<MaterialAddModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notifierService: NotifierService,
              private materialService: MaterialService) {
  }

  ngOnInit(): void {
    if (this.data.method === 'edit') {
      this.materialItemId = this.data.initialValue.id;
      this.addMaterialForm.controls.title.setValue(this.data.initialValue.title);
      this.addMaterialForm.controls.inventory_number.setValue(this.data.initialValue.inventory_number);
      this.addMaterialForm.controls.date_start.setValue(this.data.initialValue.date_start);
      this.addMaterialForm.controls.type.setValue(this.data.initialValue.type);
      this.addMaterialForm.controls.amount.setValue(this.data.initialValue.amount);
      this.addMaterialForm.controls.price.setValue(this.data.initialValue.price);
      this.addMaterialForm.controls.sum.setValue(this.data.initialValue.sum);
      this.addMaterialForm.controls.employee_id.setValue(this.data.initialValue.employee_id);
      this.addMaterialForm.controls.score_id.setValue(this.data.initialValue.score_id);
    }
  }

  public materialModalAction(method: string): void {
    if (method === 'add') {
      this.materialService.addMaterialItem(this.addMaterialForm.value).subscribe(res => {
          this.notifierService.notify('success', 'Add Success!');
          this.dialogRef.close();
        },
        error => {

        }
      )
    } else {
      this.materialService.editMaterialItem(this.materialItemId, this.addMaterialForm.value).subscribe(res => {
          this.notifierService.notify('success', 'Edit Success!');
          this.dialogRef.close();
        },
        error => {

        }
      )
    }
  }
}
