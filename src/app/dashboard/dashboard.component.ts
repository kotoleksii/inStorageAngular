import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {OverlayContainer} from "@angular/cdk/overlay";
import {FormControl} from "@angular/forms";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | any;

  public userData: any;
  public navLinks: any[] = [];
  public activeLinkIndex = -1;

  constructor(private router: Router,
              private dialog: MatDialog,
              private overlay: OverlayContainer) {
    this.navLinks = [
      {
        icon: 'home',
        label: 'Home',
        link: './home/',
        index: 0
      }, {
        icon: 'work_outline',
        label: 'Materials',
        link: './materials/',
        index: 1
      }, {
        icon: 'file_copy',
        label: 'Scores',
        link: './scores/',
        index: 2
      }, {
        icon: 'group',
        label: 'Employees',
        link: './employees/',
        index: 3
      }
    ];

    this.userData = JSON.parse(<string>localStorage.getItem("user"));
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });

    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
        localStorage.setItem('data-theme', 'dark');
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
        localStorage.setItem('data-theme', 'light');
      }
    });
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);
}
