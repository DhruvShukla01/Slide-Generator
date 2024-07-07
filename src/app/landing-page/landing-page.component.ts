// src/app/components/landing-page/landing-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatgptService } from '../services/chatgpt.service';  // Update the path if necessary

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  theme: string = '';
  slides: string = '';

  constructor(private chatgptService: ChatgptService) { }

 // In your LandingPageComponent
 
 generateSlides() {
  if (this.theme.trim() !== '') {
    this.theme = `generate slides of theme ${this.theme}`;
  }
  this.chatgptService.generateSlides(this.theme).subscribe(
    (response) => {
      console.log('Received response:', response);  // Check the structure of response
      this.slides = response.slides;  // Assuming response has a 'slides' property
      console.log('Slides data:', this.slides);  // Verify what is being set to this.slides
    },
    (error) => {
      console.error('Error generating slides:', error);
    }
  );
}
downloadSlides() {
  window.open('/download-slides', '_blank');
}




  ngOnInit(): void {
    
  }
}
