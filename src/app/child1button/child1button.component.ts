import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-child1button',
  templateUrl: './child1button.component.html',
  styleUrls: ['./child1button.component.scss']
})
export class Child1buttonComponent implements OnInit , ICellRendererAngularComp {

  params:any;
  cellValue:any;
  constructor() { }
  refresh(params: any): boolean {
    return false;
  }
  agInit(params: any): void {
    this.params = params;
    this.cellValue = params.value;
  }
  

  ngOnInit() {
  }

  addNewRow(){
    this.params.context.componentParent.onAddRow1(this.cellValue);
  }

  getDeletedValue(){
    this.params.context.componentParent.onDelete1(this.cellValue);
  }

  editValue(){
    this.params.context.componentParent.editValue1(this.cellValue);
  }

  getAllCatagory(){
    this.params.context.componentParent.makePostRequest1(this.cellValue);
  }

}
