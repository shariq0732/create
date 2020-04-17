import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serachbaar',
  templateUrl: './serachbaar.component.html',
  styleUrls: ['./serachbaar.component.scss']
})
export class SerachbaarComponent implements OnInit {

  constructor(private rout:Router) { }

  ngOnInit() {
  }

  onClick():void{
    this.rout.navigate(['/ag-grid']);
  }

}
