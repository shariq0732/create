import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-masterbutton',
  templateUrl: './masterbutton.component.html',
  styleUrls: ['./masterbutton.component.scss']
})
export class MasterbuttonComponent implements OnInit , ICellRendererAngularComp {

  value1:boolean;
  params:any;
  cellValue:any;
  constructor() { 
    this.value1 = true;
  }
  refresh(params: any): boolean {
    return false;
  }
  agInit(params: any): void {
    this.params = params;
    this.cellValue = params.value;
    if(this.cellValue == 0){
      this.value1 = false;
    }
  }
  

  ngOnInit() {
  }

  addNewRow(){
    this.params.context.componentParent.onAddRow(this.cellValue);
  }

  getDeletedValue(){
    this.params.context.componentParent.onDelete(this.cellValue);
  }

  editValue(){
    this.params.context.componentParent.editValue(this.cellValue);
  }

  getAllCatagory(){
    this.params.context.componentParent.makePostRequest(this.cellValue);
  }

}
