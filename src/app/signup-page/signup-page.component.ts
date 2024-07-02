import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  constructor(private router: Router) {}

  
  goToWaitListPage(){
    this.router.navigate(['/waitlist-page'])
  }
  goToLoginPage(): void {
    this.router.navigate(['/login-page']);

  }
}
