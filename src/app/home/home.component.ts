/**
 * Home Component
 * 
 * This component displays the main home page of the housing application.
 * It shows a list of all available housing locations and provides a search/filter
 * functionality to filter housing locations by city name.
 */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <!-- Search/Filter section: allows users to filter housing locations by city -->
    <section>
    <form>
      <input #filter type="text" placeholder="Filter by city">
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
    </section>
    <!-- Results section: displays all housing location cards that match the filter -->
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Full list of all housing locations fetched from the service
  housingLocationList: HousingLocation[] = [];
  // Injected service for fetching housing data from the API
  housingService = inject(HousingService);
  // Filtered list of housing locations displayed to the user
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    // Fetch all housing locations on component initialization
    // Both lists are initialized with the same data; filtered list will be updated based on user input
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  /**
   * Filters the housing locations based on the search text
   * @param text - The city name to filter by (case-insensitive)
   * If text is empty, shows all housing locations
   */
  filterResults(text: string) {
    // If no text is provided, show all locations
    if (!text) this.filteredLocationList = this.housingLocationList;

    // Filter locations where the city name includes the search text (case-insensitive)
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }
}
