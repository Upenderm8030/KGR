import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {}
