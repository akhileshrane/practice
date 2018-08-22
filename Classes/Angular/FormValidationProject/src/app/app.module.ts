import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; 
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { RegUsersComponent } from './reg-users/reg-users.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    RegUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   
    RouterModule.forRoot([{
        path:'test-cmp',
        component:WelcomeComponent
    },
    {
      path:'regComp',
      component:RegisterComponent
    },
    {
      path:'regUsers',
      component:RegUsersComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 

}
