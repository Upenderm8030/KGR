import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-faculty-mba',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './faculty-mba.component.html',
  styleUrl: './faculty-mba.component.scss',
})
export class FacultyMbaComponent {}
