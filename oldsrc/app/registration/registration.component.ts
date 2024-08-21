import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {}
