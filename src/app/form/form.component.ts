import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MailService } from '../service/mail.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  

  testClick() {
    console.log('Button clicked!');
  }
  
  constructor(private mailService: MailService) { }
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Submitting form...'); // Debugging
  
    const formData = {
      name: this.name,
      email: this.email,
      phone: this.phone
    };
  
    this.mailService.sendFormData(formData).subscribe(
      (response: any) => {
        console.log('Form submitted successfully:', response);
        alert('Email sent successfully');
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('Failed to send email. Please try again.');
      }
    );
  }
}  