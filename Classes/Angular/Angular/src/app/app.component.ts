import { Component } from '@angular/core';
import {MyServiceService} from './my-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';
  
dateToday
constructor(private ms:MyServiceService){
}
ngOnInit(){
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.dateToday=this.ms.showDate();
}

}
