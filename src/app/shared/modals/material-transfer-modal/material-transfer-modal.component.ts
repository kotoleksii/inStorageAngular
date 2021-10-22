import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-material-transfer-modal',
  templateUrl: './material-transfer-modal.component.html',
  styleUrls: ['./material-transfer-modal.component.scss']
})
export class MaterialTransferModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MaterialTransferModalComponent>,) {
  }

  ngOnInit(): void {
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

}
