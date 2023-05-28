import { Component,OnInit } from '@angular/core';
import { ListArtisanService } from '../../core/services/list-artisan.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/modeles/user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';



@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  artisan$!: Observable<User[]>;
  users: any[] = [] 
  url: string = "http://localhost:8090/";
  id: number;


  constructor(private listArtisanService :ListArtisanService,private router: Router, private http: HttpClient, private location: Location,
    private modalService: NgbModal   ){ }


   deleteUser(id: number) {
  this.listArtisanService.deleteUser(id)
    .subscribe(
      () => { console.log('User deleted successfully.');
      this.users = this.users.filter(user => user.id !== id);
      window.location.reload();
        // Handle successful deletion, e.g., show a success message
      },
      (error) => {  console.error('An error occurred while deleting the user:', error)
        // Handle error, e.g., show an error message
      }
    );
}



   ngOnInit() : void {
  // this.artisan$=this.listArtisanService.getAllArtisan();
   this.artisan$=this.listArtisanService.getAllArtisan();

 }

 openEditModal(user: User) {
  const modalRef = this.modalService.open(UserEditModalComponent);
  modalRef.componentInstance.user = Object.assign({}, user); // Create a new object to prevent modifications to the original user object

  modalRef.result.then((result) => {
    if (result === 'updated') {
      // User was updated, you can perform any necessary actions, such as refreshing the user data
      this.getUsers();
    }
  }).catch((error) => {
    console.log('Modal dismissed');
  });
}

getUsers() {
  this.listArtisanService.getAllArtisan().subscribe(
    (data: User[]) => {
      this.users = data;
    },
    (error: any) => {
      console.log('Error occurred while retrieving users', error);
    }
  );
}


}



