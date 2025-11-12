# Angular Homes App

## Overview

The Angular Homes App is a housing location application built with Angular that allows users to browse available housing locations and submit applications to live at specific locations.

### Features

- **Home Page**: Displays a list of all available housing locations with photos, names, and locations
- **Search/Filter**: Filter housing locations by city name (case-insensitive search)
- **Details Page**: View detailed information about a specific housing location including:
  - Photo and location information
  - Number of available units
  - Amenities (WiFi and laundry availability)
  - Application form to apply for housing

### Application Architecture

- **Components**:
  - `AppComponent`: Root component with header and router outlet
  - `HomeComponent`: Main page displaying all housing locations with search functionality
  - `DetailsComponent`: Detailed view of a specific housing location with application form
  - `HousingLocationComponent`: Reusable card component for displaying housing location information

- **Services**:
  - `HousingService`: Handles all API calls to fetch housing data from the JSON server endpoint

- **Routing**:
  - `/` - Home page (list of all housing locations)
  - `/details/:id` - Details page for a specific housing location

## Prerequisites

- Node.js and npm installed
- Angular CLI installed globally

## Installation

1. Install Angular CLI if you don't have it installed:

   ```bash
   npm install -g @angular/cli
   ```

2. Clone this branch to your local machine:

   ```bash
   git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app
   ```

3. Navigate to the project directory:

   ```bash
   cd homes-app
   ```

4. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

### Step 1: Start the JSON Server (Required)

The application requires a JSON server to be running to serve the housing location data. The server provides a REST API endpoint at `http://localhost:3000/locations`.

To start the JSON server:

```bash
npm run server
```

This command runs `json-server --watch db.json` which:
- Starts a JSON server on `http://localhost:3000`
- Serves the housing location data from `db.json`
- Watches for changes to `db.json` and automatically updates the API

The server will run in the terminal and display:
- The API endpoints available
- Server running on `http://localhost:3000`
- Access to the `/locations` endpoint with all housing location data

**Important**: Keep this server running in a separate terminal window while using the application.

### Step 2: Start the Angular Development Server

In a new terminal window, run:

```bash
ng serve
```

Or using npm:

```bash
npm start
```

The application will be available at `http://localhost:4200`.

## Usage

1. Make sure the JSON server is running on `http://localhost:3000` (run `npm run server`)
2. Start the Angular development server (run `ng serve`)
3. Open your browser and navigate to `http://localhost:4200`
4. Browse housing locations on the home page
5. Use the search box to filter locations by city
6. Click "Learn More" on any housing location card to view details
7. Fill out and submit the application form on the details page

## API Endpoint

The application uses the following JSON server endpoint:
- **Base URL**: `http://localhost:3000`
- **Locations Endpoint**: `http://localhost:3000/locations`
- **Individual Location**: `http://localhost:3000/locations/:id`

The data is stored in `db.json` and contains housing location information including:
- ID, name, city, state
- Photo URL
- Number of available units
- WiFi and laundry availability

## Development

### Build

To build the project for production:

```bash
ng build
```

### Running Tests

```bash
ng test
```

## Project Structure

```
src/
├── app/
│   ├── app.component.ts          # Root component
│   ├── home/
│   │   └── home.component.ts     # Home page component
│   ├── details/
│   │   └── details.component.ts  # Details page component
│   ├── housing-location/
│   │   └── housing-location.component.ts  # Housing location card component
│   ├── housing.service.ts        # Service for API calls
│   ├── housing-location.ts       # Housing location interface
│   └── routes.ts                 # Route configuration
├── main.ts                       # Application entry point
└── ...
db.json                           # JSON server database file
```