import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { TechService } from '../service/tech.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit , ICellRendererAngularComp{

  value:boolean;
  public params:any;
  public cellValue:any;
  gridApi: any;
  gridColumnApi: any;
  constructor(private service : TechService,
              private Rout :Router) { }
      
  agInit(params: any ): void {
    this.params = params;
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
    this.params.context.componentParent.informationPage(this.cellValue);
  }

  getDeletedValue():void{
    //this.service.deleteRow(this.cellValue);
    this.params.context.componentParent.onRemoveSelected(this.cellValue);
  }

  refresh(params: any): boolean {
    return true;
  }

}
