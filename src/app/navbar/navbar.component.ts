import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
bars=false;
  constructor() { }

  ngOnInit() {
  }
  MenuClick(){
   if(this.bars==true){
    this.bars= false;
   }else{
     this.bars=true;
   }
  /* this.bars?true:false;*/
  }

}