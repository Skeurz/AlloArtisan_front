import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedinUser : string;

  
  constructor(){}
  ngOnInit() {}


  loggedin() {
    //return localStorage.getItem('access_token');
    this.loggedinUser = localStorage.getItem('access_token')!;
    return this.loggedinUser
  }
  onLogout() {
    localStorage.removeItem('access_token');
  }
}


