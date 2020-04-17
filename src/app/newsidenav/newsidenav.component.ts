import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsidenav',
  templateUrl: './newsidenav.component.html',
  styleUrls: ['./newsidenav.component.scss']
})
export class NewsidenavComponent implements OnInit {

  style2 = {
    marginTop : '36px'
  }

  // .logo {
//     float: right;
//     margin-right: 200px;
//     margin-top: 3px;
//     padding: 2px;
//     width: 160px;
//     display: inline-block;
//   }

  logo = {
    float: 'right',
    marginRight: '370px',
    marginTop: '8px',
    padding: '2px',
    width : '160px',
    display: 'inline-block'
  }
  
  myVar:boolean = false;
  myVar1:boolean = true;
  isExpanded:boolean = true;
  isMenuOpen = true;
  contentMargin = 240;


  


  constructor(private rout : Router){

  }
  ngOnInit() {
  

  }

  onToolbarMenuToggle() {
    this.myVar = true;
    this.myVar1 = false;
    this.logo.marginRight = '200px';
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
    this.logo.marginRight = '370px';
    this.style2.marginTop = '36px';
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  newEntry(){
    this.rout.navigate(['/master-component'] );
  } 

  backToHome(){
    this.rout.navigate(['/serachbaar']);
  }

}


  

