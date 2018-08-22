import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-reactive-form-input',
  templateUrl: './reactive-form-input.component.html',
  styleUrls: ['./reactive-form-input.component.css']
})
export class ReactiveFormInputComponent implements OnInit {

  constructor() { }
  formdata
  onClickSubmit(data){
    alert("username: "+data.username)
    alert("pwd: "+data.password)
  }

  ngOnInit() {
    this.formdata=new FormGroup({
      username: new FormControl("user1"),
      password: new FormControl("user123")
    });
  }

}
