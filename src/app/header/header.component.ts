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
  
  slogan: string = "You one stop shop for everThing";
  sorceImg: string = "../../assets/webstore-image-1.webp";
  
  gitSlogan(): string {
    return 'This is the new Slogan for this application' 
  }

}
