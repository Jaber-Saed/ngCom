import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  //this men Data binding make me yse the data in html template
  title = 'eShopping';
  slogan = 'Your one top shop';
  display = false;
  
  

  onClick ( ) {
    this.display = true;
  }
}
