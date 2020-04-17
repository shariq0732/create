// import { Component, OnInit } from '@angular/core';
// import { TechService } from '../service/tech.service';
// import { Router } from '@angular/router';
// import { Child1buttonComponent } from '../child1button/child1button.component';

// @Component({
//   selector: 'app-childtable1',
//   templateUrl: './childtable1.component.html',
//   styleUrls: ['./childtable1.component.scss']
// })
// export class Childtable1Component implements OnInit {
//   style = {
//     float: 'right',
//     marginLeft: '0px',
//     marginTop : '30px',
//     width: '59%',
//     height: '96%',
//     boxSizing: 'border-box',
//     display:'inline-block'
//   };

//   index:any;
//   id:any;
//   private gridApi : any;
//   private gridColumnApi : any;
//   private columnDefs : any;
//   private rowData : any;
//   private gridOptions:any;
//   private frameworkComponents : any;
//   private defaultColDef : any;
//   private rowSelection : any;
//   private editType:any;
//   getRowNodeId: (data: any) => any;
//   immutableStore:any[] = [];
 

//   constructor(private ser : TechService,
//               private Rout: Router){


//     this.gridOptions = {
//       context :{
//         componentParent : this
//       }
//     }


//     this.columnDefs = [
//       {
//         headerName : "Title Name" , 
//         field : 'titleName' ,
//         width: 200,
//         minWidth: 50,
//         sortable: true,
//         filter: true,
//         resizable: true,
//       },
//       {
//         headerName : "Description" , 
//         field : 'titleDesc' ,
//         width: 200,
//         minWidth: 50,
//         sortable: true,
//         filter: true,
//         resizable: true,
//         editable: false
//       },
//       {
//         headerName : "Created By" , 
//         field : 'createdBy' ,
//         width: 200,
//         minWidth: 50,
//         sortable: true,
//         filter: true,
//         resizable: true,
//       },

//       {
//         headerName : "Created Date" , 
//         field : 'createdDate' ,
//         width: 200,
//         minWidth: 50,
//         sortable: true,
//         filter: true,
//         resizable: true,
//         editable: false
//       },
//       {
//         headerName : "Last Updated" , 
//         field : 'lastUpdated' ,
//         width: 180,
//         minWidth: 50,
//         sortable: true,
//         filter: true,
//         resizable: true,
//         editable: false
//       },
//       {
//         headerName : "" , 
//         field : 'titleId' ,
//         cellRenderer : 'child1button',
//         width: 100,
//         editable: false,
        
//       },
//     ];

//     this.defaultColDef = {
//       flex : 1,
//       editable: true
      
//     }

//     this.frameworkComponents = {
//       child1button : Child1buttonComponent
//     }
    
    
//     this.rowSelection = 'multiple';
//     this.editType = 'fullRow';
//     this.getRowNodeId = function(data) {
//       return data.symbol;
//     };

    

//   }

//   ngOnInit() {
//   }

//   onGridReady(params:any){
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;

//     this.ser.getCatagoryByTopic(true)
//     .subscribe((data)=>{
//       // console.log(data);
//       // this.id = data.length;
//       // console.log(this.id);
//       // this.rowData = data;
//       // this.id = data[data.length-1].topicId+1;
//       // this.index = data.length;
//       this.immutableStore = data;
//       console.log(this.immutableStore);
//       this.gridApi.setRowData(this.immutableStore);
      
//     })

   
//   }

//   onAddRow(value : any) {
//     //console.log(this.immutableStore.length);
//     var newItem = this.createNewRowData();
//     var res = this.gridApi.updateRowData({ add: [newItem] });
//     this.gridApi.startEditingCell({
//       rowIndex: this.immutableStore.length,
//       colKey: 'titleName',
//     });
//     this.index+=1;
//     this.id+=1;
//   }


//   onDelete(value : any){
//     var data1 = [];
//     this.immutableStore.forEach((data)=>{
//       if(data.titleId != value){
//         data1.push(data);
//       }
//     })
//     this.immutableStore = data1;
//     this.gridApi.setRowData([]);
//     this.gridApi.setRowData(this.immutableStore);

//     // console.log(value);
//     // var selectedData = this.gridApi.getSelectedRows();
//     // var res = this.gridApi.updateRowData({ remove: selectedData });
//     // console.log(res['remove'].length);
//     // if(res['remove'].length > 0 && res['remove'].topicName != 'topicName'){
//     //   console.log("sdjhvasj");
//     //   this.index-=1;
//     //   this.ser.deleteTopicRow(value);
//     // }
//     // this.id-=1;
//    // console.log(this.id);
    
    
//   }

//   editValue(value:any){
    
//     // console.log(value)
//     // this.gridApi.startEditingCell({
//     //   rowIndex: this.immutableStore.length,
//     //   colKey: 'titleName',
//     // });
//   }

//   makePostRequest(value:any){
//     var rowData;
//     var keepgoing = true;
//     console.log(value);
//     this.gridApi.forEachNode(function(node) {
//       if(keepgoing && (value == node.data.topicId)){
//         rowData = node.data;
//         keepgoing = false;
//       }
//     });
//     this.ser.makePostReuest(rowData).
//     subscribe((data)=>{
//       console.log(data);
//     })
//     console.log(rowData);

    
//   }
  


//   createNewRowData() {
//       var newData = {
//       topicName: 'topicName',
//       desc: 'Description ',
//       topicId: this.id,
//     };
//     return NaN;
//   }

//   setWidthAndHeight(width:any, height:any) {
//     this.style = { 
//         float : 'right',
//         marginLeft: '0px',
//         marginTop : '60px',
//         width: width,
//         height: height,
//         boxSizing:'border-box',
//         display:'inline-block'
//     };
// }

// }
