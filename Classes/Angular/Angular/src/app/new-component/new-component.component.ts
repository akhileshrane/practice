import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  msg="Hello World!"
  arr=["india","pakistan","bangladesh","Purple","Azure","Hello","Hm"]
  isValid=false
  constructor() { }
  ngOnInit() {
  }
  open(){
    alert("Thanks for clicking me!")
  }
  change(){
    var val = (<HTMLInputElement>document.getElementById("Text")).value;
    alert("You typed: "+val)
  }
}
