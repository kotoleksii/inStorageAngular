import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
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
  templateUrl: './material-add-modal.component.html',
  styleUrls: ['./material-add-modal.component.scss'],

})


export class MaterialAddModalComponent implements OnInit {

  employees: any;
  scores: any;

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
              private materialService: MaterialService,
              private employeeService: EmployeeService,
              private scoreService: ScoreService,
  ) {
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
      // this.addMaterialForm.controls.sum.setValue(this.data.initialValue.sum);
      this.addMaterialForm.controls.sum.setValue(this.data.initialValue.amount * this.data.initialValue.price);
      this.addMaterialForm.controls.employee_id.setValue(this.data.initialValue.employee_id);
      this.addMaterialForm.controls.score_id.setValue(this.data.initialValue.score_id);
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
      addMaterialFormValues.sum = addMaterialFormValues.amount * addMaterialFormValues.price;
      // console.log(qwe);
      this.materialService.addMaterialItem(addMaterialFormValues).subscribe(res => {
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
    return this.employees.find((el: any) => el.id === id).first_name;
  }
}
