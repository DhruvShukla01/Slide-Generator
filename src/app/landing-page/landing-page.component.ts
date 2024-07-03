import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatgptService } from '../ai.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  theme: string ='';
  slides: string ='';

  constructor(private chatgptService: ChatgptService) { }
  generateSlides() {
    this.chatgptService.generateSlides(this.theme).subscribe(
      (response) => {
        this.slides = response.slides;
      },
      (error) => {
        console.error('Error generating slides:', error);
      }
    );
  }

  ngOnInit(): void {
    
  }

}
