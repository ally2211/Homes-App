/**
 * Route Configuration
 * 
 * This file defines all the routes for the Angular application.
 * It maps URL paths to their corresponding components and sets page titles.
 */
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


const routeConfig: Routes = [
    {
        // Default route: displays the home page with list of all housing locations
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        // Details route: displays detailed information about a specific housing location
        // :id is a route parameter that will be passed to the DetailsComponent
        // Example: /details/1 will display details for housing location with ID 1
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details page',
    },
];

export default routeConfig;