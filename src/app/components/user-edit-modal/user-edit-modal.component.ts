import { Component,  Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/modeles/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListArtisanService } from 'src/app/core/services/list-artisan.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdminPageComponent } from '../admin-page/admin-page.component';



@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.css']
})
export class UserEditModalComponent {
  @Input() user: User;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private listArtisanService :ListArtisanService  ) {}
  
  onSubmit() {
    this.listArtisanService.updateUser(this.user).subscribe(
      (data: User) => {
        console.log('Utilisateur modifié avec succes', data);
        this.activeModal.close('updated');
        window.location.reload();
      },
      (error: any) => {
        console.log('Erreur', error);
        // You can handle the error and display an appropriate message
      }
    );
  }

  closeModal() {
    this.activeModal.dismiss('closed');
  }
}

  
  
  
