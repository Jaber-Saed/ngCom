import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor ( ) { }

  
  ngInInit(): void {
    
  }
  
  slogan: string = "You one stop shop for everthing";
  source: string = "../../assets/Online shopping-pana.svg";
  
  gitSlogan(): string {
    return 'This is the new Slogan for this application' 
  }

}
