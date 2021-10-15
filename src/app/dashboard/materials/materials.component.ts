import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Subject} from "rxjs";
import {IMaterial} from "../../shared/interfaces/interfaces";
import {MaterialService} from "../../shared/services/material.service";
import {MatDialog} from "@angular/material/dialog";
import {MaterialAddModalComponent} from "../../shared/material-add-modal/material-add-modal.component";

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  public dataSource: MatTableDataSource<any> | any;
  public displayedColumns = ['id', 'title', 'inventory_number', 'date_start', 'type', 'amount',
    'price_hr', 'total_sum_hr', 'employee_id', 'score_id', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private materialService: MaterialService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getAndSetMaterialItems();
  }

  public getAndSetMaterialItems(): void {
    this.materialService.getMaterialItems().subscribe((res: IMaterial[]) => {
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


// const MATERIAL_DATA: IMaterial[] = [
//   {
//     id: 2,
//     title: "corrupte",
//     inventory_number: "05398446",
//     date_start: "2020-02-01",
//     type: "\u0448\u0442.",
//     amount: 2,
//     employee_id: 2,
//     score_id: 32,
//     total_sum_hr: 1600,
//     price_hr: 800
//   },
//   {
//     id: 3,
//     title: "corrupte",
//     inventory_number: "05398446",
//     date_start: "2020-02-01",
//     type: "\u0448\u0442.",
//     amount: 2,
//     employee_id: 2,
//     score_id: 32,
//     total_sum_hr: 1600,
//     price_hr: 800
//   },
//   {
//     id: 4,
//     title: "corrupte",
//     inventory_number: "05398446",
//     date_start: "2020-02-01",
//     type: "\u0448\u0442.",
//     amount: 2,
//     employee_id: 2,
//     score_id: 32,
//     total_sum_hr: 1600,
//     price_hr: 800
//   },
//   {
//     id: 5,
//     title: "corrupte",
//     inventory_number: "05398446",
//     date_start: "2020-02-01",
//     type: "\u0448\u0442.",
//     amount: 2,
//     employee_id: 2,
//     score_id: 32,
//     total_sum_hr: 1600,
//     price_hr: 800
//   },
//   {
//     id: 6,
//     title: "corrupte",
//     inventory_number: "05398446",
//     date_start: "2020-02-01",
//     type: "\u0448\u0442.",
//     amount: 2,
//     employee_id: 2,
//     score_id: 32,
//     total_sum_hr: 1600,
//     price_hr: 800
//   },
//   {
//     id: 7,
//     title: "corrupte",
//     inventory_number: "05398446",
//     date_start: "2020-02-01",
//     type: "\u0448\u0442.",
//     amount: 2,
//     employee_id: 2,
//     score_id: 32,
//     total_sum_hr: 1600,
//     price_hr: 800
//   },
//   {
//     id: 8,
//     title: "corrupte",
//     inventory_number: "05398446",
//     date_start: "2020-02-01",
//     type: "\u0448\u0442.",
//     amount: 2,
//     employee_id: 2,
//     score_id: 32,
//     total_sum_hr: 1600,
//     price_hr: 800
//   },
//   {
//     id: 9,
//     title: "corrupte",
//     inventory_number: "05398446",
//     date_start: "2020-02-01",
//     type: "\u0448\u0442.",
//     amount: 2,
//     employee_id: 2,
//     score_id: 32,
//     total_sum_hr: 1600,
//     price_hr: 800
//   },
//   {
//     id: 10,
//     title: "corrupte",
//     inventory_number: "05398446",
//     date_start: "2020-02-01",
//     type: "\u0448\u0442.",
//     amount: 2,
//     employee_id: 2,
//     score_id: 32,
//     total_sum_hr: 1600,
//     price_hr: 800
//   },
// ];

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

