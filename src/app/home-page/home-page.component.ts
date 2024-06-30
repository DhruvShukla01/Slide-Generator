import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToLandingPage(): void {
    this.router.navigate(['/landing-page']);
  }
}
