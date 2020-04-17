import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, DialogPosition, MatSidenav } from '@angular/material';
import { DatapopupComponent } from '../datapopup/datapopup.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  

  isExpanded = true;
  constructor(private dialog : MatDialog ,
              private router:Router) { }

  ngOnInit() {
  }
  
  onClick(event:any): void {
    
    this.router.navigate(['/ag-grid']);

  }

  newEntry(){
    this.router.navigate(['/master-component']);
  }


 

}
