import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";
import { HerobannerComponent } from "../herobanner/herobanner.component";
import { HomeService } from '../service/home.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
    NgbModule,
    WelcomeComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    HerobannerComponent,
    CommonModule
]
})
export class HomeComponent {
  dataSource:any;
  Banners:any;
  Videos:any;
  constructor(private homeservice:HomeService) {

   }

  ngOnInit(): void {
    
    this.homeservice.getimages("Home","Images").subscribe({
      next:(res:any) => {
        this.dataSource=res;
        console.log("homeservice",res);
        
      },
      error: (err: any) => {
  
      }
    })
  //   this.homeservice.getbanner("Home", "Banners").subscribe({
  //     next: (res1: any) => {
  //       this.Banners = res1;
  //       console.log("Banner data fetched:", res1);  // Debugging
  //     },
  //     error: (err: any) => {
  //       console.error("Error fetching banners:", err);  // Debugging
  //     }
  //   });

    // this.homeservice.getvideos("Home","Videos").subscribe({
    //   next:(res2:any)=>{
    //     this.Videos = res2;
    //     console.log("Vidoes are fetched",res2);
    //   }    
    // })
  }
}  
