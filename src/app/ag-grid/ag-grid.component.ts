import { Component, OnInit, ViewChild} from '@angular/core';
import { TechService } from '../service/tech.service';
import { ReadComponent } from '../read/read.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  private gridApi : any;
  private gridColumnApi : any;
  private columnDefs : any;
  private rowData : any;
  private gridOptions:any;
  private frameworkComponents : any;
  private defaultColDef : any;
  private rowSelection : any;

  constructor(private ser : TechService,
              private Rout: Router){


    this.gridOptions = {
      context :{
        componentParent : this
      }
    }


    this.columnDefs = [
      {
        headerName : "Topic" , 
        field : 'topicName' ,
        width: 200,
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName : "Title" , 
        field : 'titleName' ,
        width: 200,
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName : "Posted By" , 
        field : 'createdBy' ,
        width: 200,
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName : "Created Date" , 
        field : 'createdDate' ,
        width: 318,
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName : "Last Updated Date" , 
        field : 'lastUpdated' ,
        width: 318,
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName : "" , 
        field : 'titleId' ,
        cellRenderer : 'read',
        width: 130
      },
    ];

    this.defaultColDef = {
    }

    this.frameworkComponents = {
      read : ReadComponent
    }
    
    
    this.rowSelection = 'multiple';


  }
 
  ngOnInit() {
  }


  onGridReady(params:any):void{
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.ser.getData().subscribe((data)=>{
      this.rowData = data;
      console.log("hi" , this.rowData);
    })
  }

  onRemoveSelected(value :any) {
    this.ser.deleteRow(value);
    var selectedData = this.gridApi.getSelectedRows();
    console.log(selectedData);
    var res = this.gridApi.updateRowData({ remove: selectedData });
    console.log(res);
  }


  informationPage(value:any){
   // this.ser.setData(value);
    // console.log(this.cellValue);
    var rowData;
    var keepgoing = true;
    this.gridApi.forEachNode(function(node) {
      if(keepgoing && (value == node.data.titleId)){
        rowData = node.data;
        keepgoing = false;
      }
    });
    //console.log("yah hai row data = " ,rowData);
    this.ser.changeMessage(rowData);
    this.Rout.navigate(['/informationscreen'])

  }



  

}
