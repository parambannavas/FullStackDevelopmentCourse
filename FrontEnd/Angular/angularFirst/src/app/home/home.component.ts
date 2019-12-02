import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'angularFirst';
  months=['jan','feb','mar','apr','may','jun','jly','aug','sep','nov','dec'];
  temp='learning';
  isavailable=true;
  a=10;
  b=20;
  name="your Name";
   myClickfunction(event){
    alert("clicked")
    console.log(event);
  }

}
