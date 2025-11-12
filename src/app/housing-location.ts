/**
 * Housing Location Interface
 * 
 * This interface defines the structure of a housing location object.
 * It specifies all the properties that a housing location should have,
 * including its ID, name, location, photo, available units, and amenities.
 * 
 * This interface is used throughout the application to ensure type safety
 * when working with housing location data.
 */
export interface HousingLocation {
    // Unique identifier for the housing location
    id: number;
    // Name of the housing location
    name: string;
    // City where the housing location is located
    city: string;
    // State where the housing location is located
    state: string;
    // URL or path to the photo/image of the housing location
    photo: string;
    // Number of available units at the housing location
    availableUnits: number;
    // Whether the housing location has wifi available
    wifi: boolean;
    // Whether the housing location has laundry facilities available
    laundry: boolean;
}
