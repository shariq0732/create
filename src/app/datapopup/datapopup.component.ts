import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TechService } from '../service/tech.service';

@Component({
  selector: 'app-datapopup',
  templateUrl: './datapopup.component.html',
  styleUrls: ['./datapopup.component.scss']
})
export class DatapopupComponent implements OnInit {


  TechEntity = [];
  constructor(private dialogref : MatDialogRef<DatapopupComponent> ,
              private _service : TechService) { 
    
    this._service.getData()
    .subscribe((data)=>{
      this.TechEntity= data;
    })

  }
  onNoClick(){
    this.dialogref.close();
  }
  ngOnInit() {
  }

}
