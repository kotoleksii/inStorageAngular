import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Observable, of, Subject} from "rxjs";
import {IEmployee, IMaterial, IScore} from "../../shared/interfaces/interfaces";
import {MaterialService} from "../../shared/services/material.service";
import {MatDialog} from "@angular/material/dialog";
import {MaterialAddModalComponent} from "../../shared/modals/material-add-modal/material-add-modal.component";
import {ConfirmDialogModalComponent} from "../../shared/modals/confirm-dialog-modal/confirm-dialog-modal.component";
import {NotifierService} from "angular-notifier";
import {EmployeeService} from "../../shared/services/employee.service";
import {ScoreService} from "../../shared/services/score.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MaterialTransferModalComponent} from "../../shared/modals/material-transfer-modal/material-transfer-modal.component";


@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class MaterialsComponent implements OnInit {

  isTableExpanded = false;

  materials: any;
  employees: any;
  scores: any;

  public dataSource: MatTableDataSource<any> | any;
  public displayedColumns = ['id', 'title', 'inventory_number', 'date_start', 'type', 'amount',
    'price_hr', 'total_sum_hr', 'employee_id', 'score_id', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private materialService: MaterialService,
              private employeeService: EmployeeService,
              private scoreService: ScoreService,
              public dialog: MatDialog,
              private notifierService: NotifierService) {
  }

  ngOnInit(): void {
    this.getAndSetMaterialItems();
    this.getMaterialItems();
    this.getEmployeeItems();
    this.getScoreItems();
  }

  public getAndSetMaterialItems(): void {
    this.materialService.getMaterialItems().subscribe((res: IMaterial[]) => {
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public getMaterialItems(): void {
    this.materialService.getMaterialItems().subscribe((res: IMaterial[]) => {
      this.materials = res;
    });
  }

  public getEmployeeItems(): void {
    this.employeeService.getEmployeeItems().subscribe((res: IEmployee[]) => {
      this.employees = res;
    });
  }

  public getEmployeeById(id: number): string {
    return this.employees.find((el: any) => el.id === id).last_name;
  }


  public getScoreById(id: number): string {
    return this.scores.find((el: any) => el.id === id).title;
  }


  public getScoreItems(): void {
    this.scoreService.getScoreItems().subscribe((res: IScore[]) => {
      this.scores = res;
    });
  }

  public deleteMaterialItem(id: number): void {
    this.materialService.removeMaterialItem(id).subscribe(res => {
      this.dataSource = res;
      this.getAndSetMaterialItems();
    })
  }

  public openDialog(method: string, dataToEdit?: any): void {
    const dialogRef = this.dialog.open(MaterialAddModalComponent, {
      data: {
        method: method,
        initialValue: dataToEdit,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAndSetMaterialItems();
    });
  }

  public openConfirmDialog(id: number, dataToDelete?: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogModalComponent, {
      maxWidth: "400px",
      data: {
        title: "Are you sure?",
        // message: "You are about to delete " + dataToDelete.title,
        message: `You are about to delete <b>${dataToDelete.title}</b>`,
        initialValue: dataToDelete,
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.notifierService.notify('success', 'Delete ' + dataToDelete.title + ' Success!');
        this.deleteMaterialItem(id);
      }
      console.log(dialogResult);
    });
  }

  public openTransferDialog(): void {
    const dialogRef = this.dialog.open(MaterialTransferModalComponent, {});

    dialogRef.afterClosed().subscribe(dialogResult => {
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;

  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${page + 1} of ${amountPages}`;
  }
}

