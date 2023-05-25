import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit,Input } from '@angular/core';
import { User } from 'src/app/core/modeles/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedinUser : string;



  constructor(private router: Router){}
  ngOnInit() {}
  /*onViewEtudiant(){
    this.router.navigateByUrl(`artisans/${this.artisan.id}`);
  }*/
  loggedin() {
    //return localStorage.getItem('access_token');
   // this.router.navigateByUrl(`artisans/${this.artisan.id}`)
    this.loggedinUser = localStorage.getItem('access_token')!;

    return this.loggedinUser
  }
  onLogout() {
    localStorage.removeItem('access_token');
  }
}


