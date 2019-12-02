import { Component, OnInit } from '@angular/core';
import {GetusersService} from '../getusers.service';
//import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private serviceObject:GetusersService) { //alert("im consttru");
  
  }

  ngOnInit() {
    //alert("im loadu");
  }
  userData;
  getUsers(){
    //  console.log("hai");
    // this.http.get("http://jsonplaceholder.typicode.com/users")
    this.serviceObject.getUserService()
    .subscribe((users)=>{
      this.userData=users;
      console.log(this.userData);
    });
   
   }
  
}