import { Component, OnInit } from '@angular/core';
import { TechService } from '../service/tech.service';
import { Router } from '@angular/router';
import { MasterbuttonComponent } from '../masterbutton/masterbutton.component';
import { Child1buttonComponent } from '../child1button/child1button.component';
import { MatDialog } from '@angular/material';
import { RichtexteditorComponent } from '../richtexteditor/richtexteditor.component';
import { CatagoryData } from '../model/CatagoryData';

@Component({
  selector: 'app-master-component',
  templateUrl: './master-component.component.html',
  styleUrls: ['./master-component.component.scss']
})
export class MasterComponentComponent implements OnInit {

  // grid1 variable
  style1 = {
    marginLeft: '60px',
    marginTop : '130px',
    marginRight: '0px',
    width: '97%',
    height: '82%',
    boxSizing: 'border-box',
    display:'inline-block'
  };

  index:any;
  id:any;
  private topicId:number;
  private gridApi : any;
  private gridColumnApi : any;
  private columnDefs : any;
  private rowData : any;
  private gridOptions:any;
  private frameworkComponents : any;
  private defaultColDef : any;
  private rowSelection : any;
  private editType:any;
  getRowNodeId: (data: any) => any;
  immutableStore:any[] = [];


  //grid2 variable
  myVar:boolean = false;
  index1:any;
  id1:any;
  style2 = {
    float: 'right',
    marginLeft: '0px',
    marginTop : '130px',
    width: '61%',
    height: '82%',
    boxSizing: 'border-box',
    display:'inline-block'
  };
  private gridApi1 : any;
  private gridColumnApi1 : any;
  private columnDefs1 : any;
  private rowData1 : any;
  private gridOptions1:any;
  private frameworkComponents1 : any;
  private defaultColDef1 : any;
  private rowSelection1 : any;
  private editType1:any;
  getRowNodeId1: (data: any) => any;
  immutableStore1:any[] = [];
 

  constructor(private ser : TechService,
              private Rout: Router,
              private dialog: MatDialog){


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
        headerName : "Description" , 
        field : 'desc' ,
        width: 200,
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName : "" , 
        field : 'topicId' ,
        cellRenderer : 'masterbutton',
        width: 130,
        editable: false,
      },
    ];

    this.defaultColDef = {
      flex : 1,
      editable: true
    }

    this.frameworkComponents = {
      masterbutton : MasterbuttonComponent
    }
    
    
    this.rowSelection = 'multiple';
    this.editType = 'fullRow';
    this.getRowNodeId = function(data) {
      return data.symbol;
    };



    // grid2
    this.gridOptions1 = {
      context :{
        componentParent : this
      }
    }
    this.columnDefs1 = [
      {
        headerName : "Title Name" , 
        field : 'titleName' ,
        width: 200,
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
      },
      {
        headerName : "Description" , 
        field : 'titleDesc' ,
        width: 200,
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
        editable: false
      },
      {
        headerName : "Created By" , 
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
        width: 200,
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
        editable: false
      },
      {
        headerName : "Last Updated" , 
        field : 'lastUpdated' ,
        width: 180,
        minWidth: 50,
        sortable: true,
        filter: true,
        resizable: true,
        editable: false
      },
      {
        headerName : "" , 
        field : 'titleId' ,
        cellRenderer : 'child1button',
        width: 100,
        editable: false,
        
      },
    ];

    this.defaultColDef1 = {
      flex : 1,
      editable: true
      
    }

    this.frameworkComponents1 = {
      child1button : Child1buttonComponent
    }
    
    
    this.rowSelection1 = 'multiple';
    this.editType1 = 'fullRow';
    this.getRowNodeId1 = function(data) {
      return data.symbol;
    };



  }

  ngOnInit() {
  }

  onGridReady(params:any){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  
    this.ser.getAllTopic()
    .subscribe((data)=>{
      this.immutableStore = data;
      this.gridApi.setRowData(this.immutableStore);
      this.id = this.immutableStore.length;
      
    })

   
  }

  onAddRow(value : any) {
     
    console.log(this.id);
    var newItem = this.createNewRowData();
    var res = this.gridApi.updateRowData({ add: [newItem] });
    this.gridApi.startEditingCell({
      rowIndex: this.id,
      colKey: 'topicName',
    });
    
    this.id+=1;
  }


  onDelete(value : any){
    var data1 = [];
    this.immutableStore.forEach((data)=>{
      if(data.topicId != value){
        data1.push(data);
      }
    })
    this.immutableStore = data1;
    this.gridApi.setRowData([]);
    this.gridApi.setRowData(this.immutableStore);
    this.id = this.immutableStore.length;
    
    
  }

  editValue(value:any){

    // console.log(value)
    // this.gridApi.startEditingCell({
    //   rowIndex: this.immutableStore.length,
    //   colKey: 'topicName',
    // });
  }

  makePostRequest(value:any){
    var rowData;
    var keepgoing = true;
    this.topicId = value;
    this.gridApi.forEachNode(function(node) {
      if(keepgoing && (value == node.data.topicId)){
        rowData = node.data;
        keepgoing = false;
      }
    });
    this.ser.makePostReuest(rowData).
    subscribe((data)=>{
      console.log(data);
    })
    this.setWidthAndHeight('34%', '82%');
    this.ser.setData(value);
    this.myVar = true;
    this.ser.getCatagoryByTopic("pending")
    .subscribe((data)=>{
     
      this.immutableStore1 = data;
      console.log(this.immutableStore1);
      this.gridApi1.setRowData([]);
      this.gridApi1.setRowData(this.immutableStore1);
      this.id1 = this.immutableStore1.length;
      if(this.immutableStore1.length == 0){
        var newItem = this.createNewRowData1();
        var res = this.gridApi1.updateRowData({ add: [newItem] });
        this.gridApi1.startEditingCell({
        rowIndex: 0,
        colKey: 'titleName',
       });
       this.id1+=1;
      }
    })
    //console.log(this.immutableStore1.length);
  }
  


  createNewRowData() {
      var newData = {
      topicName: 'topicName',
      desc: 'Description ',
      topicId: 0,
    };
    return newData;
  }

  setWidthAndHeight(width:any, height:any) {
    this.style1 = { 
      
        marginLeft: '30px',
        marginTop : '130px',
        marginRight: '0px',
        width: width,
        height: height,
        boxSizing:'border-box',
        display:'inline-block'
    };
  }


  //grid2 handle
  onGridReady1(params:any){
    this.gridApi1 = params.api;
    this.gridColumnApi1 = params.columnApi;

   
  }

  onAddRow1(value : any) {
    var newItem = this.createNewRowData1();
    console.log(newItem);
    var res = this.gridApi1.updateRowData({ add: [newItem] });
    this.gridApi1.startEditingCell({
      rowIndex: this.immutableStore1.length,
      colKey: 'titleName',
    });
    this.id1+=1;
  }


  onDelete1(value : any){
    var data1 = [];
    this.immutableStore1.forEach((data)=>{
      if(data.titleId != value){
        data1.push(data);
      }
    })
    if(value != 0){
     // this.ser.deleteRow(value)
    }
    this.immutableStore1 = data1;
    this.gridApi1.setRowData([]);
    this.gridApi1.setRowData(this.immutableStore1);
    this.id1 = this.immutableStore.length;
  }

  editValue1(value:any){
    var rowData;
    var keepgoing = true;
    this.gridApi1.forEachNode(function(node) {
      if(keepgoing && (value == node.data.titleId)){
        rowData = node.data;
        keepgoing = false;
      }
    });
   
    //console.log(this.immutableStore1) 
    console.log("rowData12" , rowData);
    let dialogref:any
    this.ser.changeMessage(rowData.titleName);
    if(value == 0){
      console.log("if mai hai")
      dialogref  = this.dialog.open(RichtexteditorComponent , {
        height: '68%',
        width: '70%',
        data : {}
      });
    }else{
      console.log("else mai aaya hai");
      dialogref  = this.dialog.open(RichtexteditorComponent , {
        height: '68%',
        width: '70%',
        data : rowData
      });
    }
    dialogref.afterClosed().subscribe((result)=>{
      this.ser.currentMessage.subscribe((Description) => {
        //console.log(Description);
        rowData.titleDesc = Description;
      })
      if(this.ser.ntid != "null"){
        rowData.reviewrsNtid = this.ser.ntid;
      }
      console.log("titled id yah hai = " , rowData.titleId);
     // var res = this.gridApi1.updateRowData({ add: [row] });
     //var loop = false;
     this.ser.postCatagoryData(rowData , rowData.topicId , rowData.reviewrsNtid)
      .subscribe((data1)=>{
        //this.immutableStore1.push(data1);
        //console.log(data1);
       // loop = true;
        this.ser.getCatagoryByTopic("pending")
        .subscribe((data)=>{
        console.log(data)
        this.immutableStore1 = data;
        this.gridApi1.setRowData([]);
        this.gridApi1.setRowData(this.immutableStore1);
      })
      })
      
    })
    
    
    
    
  }

  makePostRequest1(value:any){
    var rowData;
    var keepgoing = true;
    console.log(value);
    this.gridApi1.forEachNode(function(node) {
      if(keepgoing && (value == node.data.titleId)){
        rowData = node.data;
        keepgoing = false;
      }
    });

    console.log(rowData);

    
  }
  


  createNewRowData1() {
      var newData = {
      titleId: 0,
      titleName: 'titleName',
      topicId: this.topicId,
      catagorystatus: 'pending',
      titleDesc: "",
      createdBy : 'Name?',
      reviewrsNtid : ""


    };
    return newData;
  }

  setWidthAndHeight1(width:any, height:any) {
    this.style2 = { 
        float : 'right',
        marginLeft: '0px',
        marginTop : '60px',
        width: width,
        height: height,
        boxSizing:'border-box',
        display:'inline-block'
    };
}

}
