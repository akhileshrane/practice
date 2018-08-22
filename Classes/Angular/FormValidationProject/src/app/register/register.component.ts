import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm
  constructor() { }

  register(data){
    alert("Registered.")
    document.getElementById('11').innerText=data.username
    document.getElementById('12').innerText=data.pwd
    document.getElementById('13').innerText=data.loc
  }
  
  ngOnInit() {
    this.regForm=new FormGroup({
      username: new FormControl("user"),
      pwd: new FormControl("pwd"),
      loc: new FormControl("Pune")
    });
}
}
