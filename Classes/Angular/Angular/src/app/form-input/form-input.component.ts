import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  constructor() { }

  onClickSubmit(data){
    alert("username: "+data.username)
    alert("pwd: "+data.password)
  }
  validate(data){
    if(data.username=="Akhilesh" && data.password=="hello123"){
      alert("You have logged in successfully")
    }
    else{
      alert("Enter the correct username password combo")
    }
  }
  ngOnInit() {
  }

}
