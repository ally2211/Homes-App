/**
 * Details Component
 * 
 * This component displays detailed information about a specific housing location.
 * It shows the housing location's photo, name, location, available units, amenities (wifi, laundry),
 * and provides a form for users to apply to live at the location.
 * The housing location ID is obtained from the route parameters.
 */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <article>
    <!-- Housing location photo -->
    <img class="listing-photo" [src]="housingLocation?.photo" alt="Exterior photo of {{ housingLocation?.name }}" />
    <!-- Housing location basic information (name and location) -->
    <section class="listing-description">
      <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
      <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
    </section>
    <!-- Housing location features and amenities -->
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{ housingLocation?.availableUnits }}</li>
        <li>Does this location have wifi? {{ housingLocation?.wifi }}</li>
        <li>Does this location have laundry? {{ housingLocation?.laundry }}</li>
      </ul>
    </section>
    <!-- Application form section: allows users to apply to live at this location -->
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" formControlName="firstName" />
        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" formControlName="lastName" />
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" />
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  </article>
  ` ,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // ActivatedRoute: provides access to route parameters (housing location ID)
  route: ActivatedRoute = inject(ActivatedRoute);
  // Injected service for fetching housing data from the API
  housingService = inject(HousingService);
  // The housing location to display (fetched based on route parameter)
  housingLocation: HousingLocation | undefined;
  // Reactive form group for the application form (firstName, lastName, email)
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    // Get the housing location ID from the route parameters
    // Route format: /details/:id (e.g., /details/1)
    const housingLocationId = Number(this.route.snapshot.params['id']);
    // Fetch the specific housing location by ID and store it
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  /**
   * Submits the application form
   * Sends the applicant's information (firstName, lastName, email) and housing location ID
   * to the housing service for processing
   */
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
      this.housingLocation?.id ?? 0
    );
  }
}