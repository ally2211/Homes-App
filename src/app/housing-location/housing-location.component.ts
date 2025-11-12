/**
 * Housing Location Component
 * 
 * This component displays a single housing location card with:
 * - Photo of the housing location
 * - Name of the housing location
 * - City and state
 * - A link to view more details about the location
 * 
 * This is a reusable component that receives housing location data via an Input property.
 */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!-- Housing location photo -->
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <!-- Housing location name -->
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <!-- Housing location city and state -->
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
      <!-- Link to navigate to the details page for this housing location -->
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  // Input property: receives housing location data from parent component (HomeComponent)
  @Input() housingLocation!: HousingLocation;
}
