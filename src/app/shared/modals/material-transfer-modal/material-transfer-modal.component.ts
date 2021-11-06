import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import {MaterialService} from "../../services/material.service";
import {EmployeeService} from "../../services/employee.service";
import {ScoreService} from "../../services/score.service";
import {NotifierService} from "angular-notifier";
import {IEmployee, IScore} from "../../interfaces/interfaces";

@Component({
  selector: 'app-material-transfer-modal',
  templateUrl: './material-transfer-modal.component.html',
  styleUrls: ['./material-transfer-modal.component.scss']
})
export class MaterialTransferModalComponent implements OnInit {

  employees: any;
  scores: any;

  public transferMaterialForm = this.fb.group({
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

  constructor(public dialogRef: MatDialogRef<MaterialTransferModalComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private notifierService: NotifierService,
              private materialService: MaterialService,
              private employeeService: EmployeeService,
              private scoreService: ScoreService,
  ) {
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

  ngOnInit(): void {
    this.materialItemId = this.data.initialValue.id;
    this.transferMaterialForm.controls.amount.setValue(this.data.initialValue.amount);
    this.transferMaterialForm.controls.employee_id.setValue(this.data.initialValue.employee_id);
    this.transferMaterialForm.controls.score_id.setValue(this.data.initialValue.score_id);

    this.getEmployeeItems();
    this.getScoreItems();
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

  public materialModalAction(): void {

    this.materialService.editMaterialItem(this.materialItemId, this.transferMaterialForm.value).subscribe(res => {
        this.notifierService.notify('success', 'Edit Success!');
        this.dialogRef.close();
      },
      error => {

      }
    )
  }

}
