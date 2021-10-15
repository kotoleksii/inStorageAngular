import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MaterialService} from "../../shared/services/material.service";
import {IMaterial, IScore} from "../../shared/interfaces/interfaces";
import {ScoreService} from "../../shared/services/score.service";

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  public dataSource: MatTableDataSource<any> | any;
  public displayedColumns = ['id', 'title', 'description'];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit(): void {
    this.getAndSetScoreItems();
  }

  public getAndSetScoreItems(): void {
    this.scoreService.getScoreItems().subscribe((res: IScore[]) => {
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
