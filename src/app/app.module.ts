import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home-page/home-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { WaitlistPageComponent } from './waitlist-page/waitlist-page.component';
import { ChatgptService } from './ai.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    SignupPageComponent,
    WaitlistPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ChatgptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
