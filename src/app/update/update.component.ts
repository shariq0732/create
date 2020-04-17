import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { TechService } from '../service/tech.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit ,ICellRendererAngularComp {
  value:boolean;
  public params:any;
  public cellValue:number;
  public valueAbled:any;
  constructor(private service : TechService) {
  }
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
   // this.cellValue = this.params.value;
    console.log(this.cellValue);
  }

  
}
