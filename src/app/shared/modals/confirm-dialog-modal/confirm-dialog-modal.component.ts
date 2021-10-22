import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

export interface DialogData {
  title: string;
  message: string;
  initialValue: any;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog-modal.component.html',
  styleUrls: ['./confirm-dialog-modal.component.scss']
})
export class ConfirmDialogModalComponent implements OnInit {

  public dialogData: DialogData | any;
  public title: string = '';
  public message: string = '';

  public deleteMaterialForm = this.fb.group({
    title: [''],
    inventory_number: [''],
  });

  public materialItemId: number = 0;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ConfirmDialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  ngOnInit(): void {
    this.materialItemId = this.data.initialValue.id;
    this.deleteMaterialForm.controls.title.setValue(this.data.initialValue.title);
    this.deleteMaterialForm.controls.inventory_number.setValue(this.data.initialValue.inventory_number);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

}
