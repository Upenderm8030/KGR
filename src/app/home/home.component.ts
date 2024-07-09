import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
        NgbModule,
        WelcomeComponent,
        FormComponent
    ]
})
export class HomeComponent {
  constructor() { }

  ngOnInit(): void {
  }
}  
