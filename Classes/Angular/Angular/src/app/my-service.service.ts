import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  showDate()
  {
   let today= new Date()
   return today 
  }
  constructor() { }
}
