import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationStart, RouterLink } from '../../node_modules/@angular/router';
import {RouterModule} from '@angular/router'
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormValidationProject';
  formdata
  constructor(
    private router: Router
  ) {}

  onClickSubmit(data){
    if(data.username=="user" && data.pwd=="pwd")
      this.router.navigate(['test-cmp'])
    else{
      var ans=prompt("You have entered the wrong username/id. Would you like to register? (Y/N)")
        if(ans=='Y'||ans=='y'){
          this.router.navigate(['regComp'])}
        else{
          this.router.navigate(['/'])}
    }
  }
  ngOnInit() {
    this.formdata=new FormGroup({
      username: new FormControl(""),
      pwd: new FormControl("")
    });
}
}
