import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componant/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,

    RouterModule,
    HttpClientModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,

  ]
  
})
export class CoreModule { }
