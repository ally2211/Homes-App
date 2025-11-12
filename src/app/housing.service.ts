/**
 * Housing Service
 * 
 * This service handles all API calls related to housing locations.
 * It provides methods to:
 * - Fetch all housing locations
 * - Fetch a specific housing location by ID
 * - Submit an application for a housing location
 * 
 * The service is provided at the root level, making it a singleton service
 * that can be injected into any component throughout the application.
 */
import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // API endpoint URL for housing locations (JSON server running on localhost:3000)
  url = 'http://localhost:3000/locations';

  constructor() { }

  /**
   * Fetches all housing locations from the API
   * @returns Promise that resolves to an array of HousingLocation objects
   */
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  /**
   * Fetches a specific housing location by its ID
   * @param id - The ID of the housing location to fetch
   * @returns Promise that resolves to a HousingLocation object or undefined if not found
   */
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  }

  /**
   * Submits an application for a housing location
   * Currently logs the application data to the console
   * In a production app, this would send the data to a backend API
   * 
   * @param firstName - Applicant's first name
   * @param lastName - Applicant's last name
   * @param email - Applicant's email address
   * @param housingLocationId - ID of the housing location being applied for
   */
  submitApplication(firstName: string, lastName: string, email: string, housingLocationId: number) {
    console.log(firstName, lastName, email, housingLocationId);
  }
}
