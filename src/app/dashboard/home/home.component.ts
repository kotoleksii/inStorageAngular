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

  materials: number | any;

  constructor(private router: Router,
              private materialService: MaterialService,
  ) {
  }

  ngOnInit(): void {
    // this.getMaterialItemsCount();
  }

  public getMaterialItemsCount() {
    this.materialService.getMaterialItems().subscribe((res: IMaterial[]) => {
      this.materials = res.length;
    })
  }

  single: any = [
    {
      "name": "Materials",
      "value": (() => {
        let temp = 0;
        return this.materialService.getMaterialItems().subscribe((res: IMaterial[]) => {
          temp = res.length;
          return temp;
        })
      })()
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

  view: any = [1000, 300];

  colorScheme: any = {
    domain: ['#dce775', '#7aa3e5', '#c2185b']
  };
  cardColor: string = '#444444';

  onSelect(event: any) {
    this.router.navigate(['dashboard', event.name.toLowerCase()]);
    console.log(event);
  }


}
