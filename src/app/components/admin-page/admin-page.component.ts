import { Component,OnInit } from '@angular/core';
import { ListArtisanService } from '../../core/services/list-artisan.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/modeles/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  artisan$!: Observable<User[]>;
  users: any[] | undefined
  url: string = "http://localhost:8090/";

 
  constructor(private listArtisanService :ListArtisanService,private router: Router){ }
 
   ngOnInit() : void {
  // this.artisan$=this.listArtisanService.getAllArtisan();
   this.artisan$=this.listArtisanService.getAllArtisan();
 }


}



