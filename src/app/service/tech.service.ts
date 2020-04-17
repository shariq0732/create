import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { TopicCtagaoryDto } from '../model/topic-ctagaory-dto';
import { CatagoryData } from '../model/CatagoryData';
import { TopicData } from '../model/TopicData';
import { Reviewer } from '../model/Reviewer';

@Injectable({
  providedIn: 'root'
})
export class TechService {
  

  cellValue:number = 8;
  map = new Map();  

  data:Observable<TopicCtagaoryDto[]>;
  data1:any[] = [];

  public ntid:any;
  private messageSource = new BehaviorSubject('first message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http : HttpClient) { }

  getData():Observable<TopicCtagaoryDto[]>{
    this.data = this.http.get<TopicCtagaoryDto[]>("http://localhost:8080/topic/catagory");
    this.data.subscribe((data)=>{
      this.data1 = data;
      for(var i = 0; i < this.data1.length; i++){
        if(this.data1[i].created_by == "noushad"){
          this.map.set(this.data1[i].title_id , true);
        }
      }
      console.log(this.data1);
      console.log(this.map);
    })
    return this.data;
  }


  sortData():any{
    return this.map;
  }


  setData(value:number){
    this.cellValue = value;
    //console.log('sgsjf' , this.cellValue);
  }

  getCatagoryData():Observable<CatagoryData[]>{
    return this.http.get<CatagoryData[]>("http://localhost:8080/CatagoryById/" + `${this.cellValue}`);
  }

  deleteRow(cellValue: any) {
    console.log("vhgvhg");
    this.http.delete("http://localhost:8080/CatagoryDeleteById/" + `${cellValue}` , {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
    .subscribe((data)=>{
      console.log(data);
    })
  }


  getAllTopic() : Observable<TopicData[]> {
    return this.http.get<TopicData[]>("http://localhost:8080/AllTopic");
  }

  makePostReuest(rowData: any) : any {
    return this.http.post<TopicData>('http://localhost:8080/postTopic' , rowData , {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }

  deleteTopicRow(value: any) {
    this.http.delete("http://localhost:8080/deleteTopic/" + `${value}` , {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
    .subscribe((data)=>{
      console.log(data);
    })
  }


  getCatagoryByTopic(currentStatus:string):Observable<CatagoryData[]>{
    console.log(this.cellValue);
    return this.http.get<CatagoryData[]>("http://localhost:8080/catagoryByTopic/" + `${currentStatus}` +"/"  + `${this.cellValue}`);
  }


  getReviewers():Observable<Reviewer[]>{
    return this.http.get<Reviewer[]>('http://localhost:8080/allReviewer');
  }


  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  setntId(ntid){
    this.ntid = ntid;
  }


  postCatagoryData( data : any, topicId:any , ntid:any) : any{
    return this.http.post<CatagoryData>('http://localhost:8080/catagory/' + `${topicId}` +"/"  + `${ntid}` ,  data  , {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }

 


}