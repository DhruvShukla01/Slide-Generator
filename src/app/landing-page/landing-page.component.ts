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

  generateSlides() {
    this.chatgptService.generateSlides(this.theme).subscribe(
      (response) => {
        this.slides = response.slides;  // Ensure your backend returns an object with a 'slides' property
      },
      (error) => {
        console.error('Error generating slides:', error);
      }
    );
  }

  ngOnInit(): void {
    
  }
}
