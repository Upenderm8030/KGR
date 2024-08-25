import { Component } from '@angular/core';
import { AlumniService } from '../service/alumni.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumni',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './alumni.component.html',
  styleUrl: './alumni.component.css'
})
export class AlumniComponent {
  alumnidataSource:any;
  constructor(private alumniComponent:AlumniService) {}
  ngOnInit(): void {
    
    this.alumniComponent.getalumni().subscribe({
      next:(res:any) => {
        this.alumnidataSource=res;
        // console.log("alumniservice",res);
        
      },
      error: (err: any) => {
      }
    })
  }
  // Function to add new alumni data manually, for demonstration purposes
  addNewAlumni(newAlumni: any): void {
    // Add the new alumni data to the existing array
    this.alumnidataSource.push(newAlumni);
  }
}
