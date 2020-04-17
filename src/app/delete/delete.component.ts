import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { TechService } from '../service/tech.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit , ICellRendererAngularComp{
  value:boolean;
  public params:any;
  public cellValue:any;
  constructor(private service : TechService ,
              private rout:Router) { }
  refresh(params: any): boolean {
    return false;
  }
  agInit(params: any): void {
    this.cellValue = params.value;
    if(this.service.map.has(this.cellValue)){
      this.value = false;
    }else{
      this.value = true;
    }
  }

  ngOnInit() {
  }

  getValue():void{
    this.service.setData(this.cellValue);
    //console.log(this.cellValue);
    this.rout.navigate(['/informationscreen'])
  }

  

}
