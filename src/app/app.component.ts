/**
 * Main App Component
 * 
 * This is the root component of the Angular application. It serves as the main container
 * that displays the header with the application logo and provides a router outlet for
 * navigating between different pages (Home and Details pages).
 */
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <!-- Application header with logo -->
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true"
        aria-hidden="true">
      </header>
      <!-- Router outlet: displays the current route's component (HomeComponent or DetailsComponent) -->
      <section class="content">
        <router-outlet></router-outlet>
        
      </section>

    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, HousingLocationComponent, RouterModule],
})
export class AppComponent {
  title = 'homes';
}
