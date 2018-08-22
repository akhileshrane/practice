import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: 'component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  myObj={
    name: 'Ram',
    age:11,
    location:"pune"
  }
  
  constructor() { }
 
  changeVal()
  {
    var NewVal=(<HTMLInputElement>document.getElementById('NewVal')).value
    var val=prompt("Change values for? Enter data in RC format.")
    if(val=='11')
      document.getElementById('11').innerHTML=NewVal
      if(val=='12')
      document.getElementById('12').innerHTML=NewVal
      if(val=='21')
      document.getElementById('21').innerHTML=NewVal
      if(val=='22')
      document.getElementById('22').innerHTML=NewVal
  }

  ngOnInit() {
  }

}
