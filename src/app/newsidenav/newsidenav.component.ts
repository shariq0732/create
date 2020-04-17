import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsidenav',
  templateUrl: './newsidenav.component.html',
  styleUrls: ['./newsidenav.component.scss']
})
export class NewsidenavComponent implements OnInit {

  style2 = {
    marginTop : '36px'
  }

  
  myVar:boolean = false;
  myVar1:boolean = true;
  isExpanded:boolean = true;
  isMenuOpen = true;
  contentMargin = 240;


  


  constructor(){

  }
  ngOnInit() {
  

  }

  onToolbarMenuToggle() {
    this.myVar = true;
    this.myVar1 = false;
    this.style2.marginTop = '0px';
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  onToolbarMenuToggle1(){
    this.myVar = false;
    this.myVar1 = true;
    this.style2.marginTop = '36px';
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }
  
}
