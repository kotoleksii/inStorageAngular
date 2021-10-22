import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MaterialService} from "../../shared/services/material.service";
import {IMaterial} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private materialService: MaterialService,
  ) {
  }

  ngOnInit(): void {
    console.log(this.getMaterialItemsCount())
  }

  single: any = [
    {
      "name": "Materials",
      "value": 1003
    },
    {
      "name": "Scores",
      "value": 33
    },
    {
      "name": "Employees",
      "value": 150
    }
  ];
  view: any = [1000, 200];

  colorScheme: any = {
    domain: ['#5AA454', '#7aa3e5', '#a8385d']
  };
  cardColor: string = '#232837';

  onSelect(event: any) {
    this.router.navigate(['dashboard', event.name.toLowerCase()]);
    console.log(event);
  }

  public getMaterialItemsCount(): any {
    this.materialService.getMaterialItems().subscribe((res: IMaterial[]) => {
      res.length;
    });
  }
}
