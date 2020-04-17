import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { TechService } from '../service/tech.service';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-informationscreen',
  templateUrl: './informationscreen.component.html',
  styleUrls: ['./informationscreen.component.css'],
})
export class InformationscreenComponent implements OnInit {
  informationDisplay:string;
  soucre:any;
  topicName:string;
  createdBy:string;


  constructor(private service : TechService) { 
    this.service.currentMessage.subscribe((data)=>{
      this.soucre = data;
      this.informationDisplay =  this.soucre.titleDesc;
      console.log(this.soucre.titleDesc);
      this.topicName = this.soucre.titleName;
      this.createdBy = this.soucre.createdBy;
    })
  }

  ngOnInit() {

  
  
  }

  

}
