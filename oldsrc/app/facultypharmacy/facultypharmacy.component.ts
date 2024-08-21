import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-facultypharmacy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './facultypharmacy.component.html',
  styleUrl: './facultypharmacy.component.scss',
})
export class FacultypharmacyComponent {}
