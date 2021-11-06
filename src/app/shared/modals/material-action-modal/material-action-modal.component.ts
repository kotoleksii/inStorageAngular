import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NotifierService} from "angular-notifier";
import {MaterialService} from "../../services/material.service";

import * as _moment from 'moment';
// @ts-ignore
import {default as _rollupMoment} from 'moment';
import {IEmployee, IScore} from "../../interfaces/interfaces";
import {EmployeeService} from "../../services/employee.service";
import {ScoreService} from "../../services/score.service";

const moment = _rollupMoment || _moment;


@Component({
  selector: 'app-material-add-modal',
  templateUrl: './material-action-modal.component.html',
  styleUrls: ['./material-action-modal.component.scss'],

})


export class MaterialActionModalComponent implements OnInit {

  employees: any;
  scores: any;

  public addMaterialForm = this.fb.group({
    title: ['', Validators.required],
    inventory_number: ['', Validators.required],
    date_start: ['', Validators.required],
    type: ['', Validators.required],
    amount: ['', Validators.required],
    price: ['', Validators.required],
    sum: ['', Validators.nullValidator],
    employee_id: ['', Validators.required],
    score_id: ['', Validators.required],
  });

  public materialItemId: number = 0;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<MaterialActionModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notifierService: NotifierService,
              private materialService: MaterialService,
              private employeeService: EmployeeService,
              private scoreService: ScoreService,
  ) {
  }

  ngOnInit(): void {
    if (this.data.method === 'edit' || this.data.method === 'send') {
      this.materialItemId = this.data.initialValue.id;
      this.addMaterialForm.controls.title.setValue(this.data.initialValue.title);
      this.addMaterialForm.controls.inventory_number.setValue(this.data.initialValue.inventory_number);
      this.addMaterialForm.controls.date_start.setValue(this.data.initialValue.date_start);
      this.addMaterialForm.controls.type.setValue(this.data.initialValue.type);
      this.addMaterialForm.controls.amount.setValue(this.data.initialValue.amount);
      this.addMaterialForm.controls.price.setValue(this.data.initialValue.price / 100);
      this.addMaterialForm.controls.sum.setValue(this.data.initialValue.sum);
      this.addMaterialForm.controls.employee_id.setValue(this.data.initialValue.employee_id);
      this.addMaterialForm.controls.score_id.setValue(this.data.initialValue.score_id);
    }
    if (this.data.method === 'send') {
      this.addMaterialForm.controls.title.disable();
      this.addMaterialForm.controls.inventory_number.disable();
    }

    this.getEmployeeItems();
    this.getScoreItems();
  }

  public materialModalAction(method: string): void {
    if (method === 'add') {

      const addMaterialFormValues = {
        ...this.addMaterialForm.value
      };

      addMaterialFormValues.date_start = moment(this.addMaterialForm.controls.date_start.value).format('YYYY-MM-DD');
      addMaterialFormValues.price = addMaterialFormValues.price * 100;
      addMaterialFormValues.sum = addMaterialFormValues.amount * addMaterialFormValues.price;
      // console.log(qwe);
      this.materialService.addMaterialItem(addMaterialFormValues).subscribe(res => {
          this.notifierService.notify('success', 'Add Success!');
          this.dialogRef.close();
        },
        error => {

        }
      )
    } else if (method == 'send') {
      const sendMaterialFormValues = {
        ...this.addMaterialForm.value
      };

      sendMaterialFormValues.price = sendMaterialFormValues.price * 100;
      sendMaterialFormValues.sum = sendMaterialFormValues.amount * sendMaterialFormValues.price;

      this.materialService.editMaterialItem(this.materialItemId, sendMaterialFormValues).subscribe(res => {
          this.notifierService.notify('success', 'Send ' + sendMaterialFormValues.title + ' Success!');
          this.dialogRef.close();
        },
        error => {

        }
      )
    } else {
      const editMaterialFormValues = {
        ...this.addMaterialForm.value
      };
      editMaterialFormValues.price = editMaterialFormValues.price * 100;
      editMaterialFormValues.sum = editMaterialFormValues.amount * editMaterialFormValues.price;

      this.materialService.editMaterialItem(this.materialItemId, editMaterialFormValues).subscribe(res => {
          this.notifierService.notify('success', 'Edit ' + editMaterialFormValues.title + ' Success!');
          this.dialogRef.close();
        },
        error => {

        }
      )
    }
  }

  public getEmployeeItems(): void {
    this.employeeService.getEmployeeItems().subscribe((res: IEmployee[]) => {
      this.employees = res;
    });
  }

  public getScoreItems(): void {
    this.scoreService.getScoreItems().subscribe((res: IScore[]) => {
      this.scores = res;
    });
  }

  public getEmployeeById(id: number): string {
    return this.employees.find((el: any) => el.id === id).last_name;
  }
}
