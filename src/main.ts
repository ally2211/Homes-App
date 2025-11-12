/**
 * Main Entry Point
 * 
 * This is the entry point of the Angular application. It bootstraps the AppComponent
 * and configures the router with the routes defined in the routes.ts file.
 * 
 * The bootstrapApplication function initializes the Angular application in standalone mode,
 * and the provideRouter function configures the Angular Router with the application routes.
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

// Bootstrap the Angular application with the AppComponent and router configuration
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routeConfig)],
})
  .catch(err => console.error(err));
