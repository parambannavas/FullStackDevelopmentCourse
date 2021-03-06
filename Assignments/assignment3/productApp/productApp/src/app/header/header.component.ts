import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "angular-web-storage";
const key = "Status";
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Local: LocalStorageService, private router: Router) { }

  ngOnInit() {
   
  }
  
  logout() {
    this.Local.remove(key);
    this.router.navigate(['']);
  }
}
