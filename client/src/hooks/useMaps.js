import { useState, useEffect } from 'react';

// Custom Hook for fetching coordinates
export const useCoordinates = (location) => {
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${import.meta.env.VITE_API_KEY}`
                );
                const data = await response.json();
                if (data.results.length > 0) {
                    const { lat, lng } = data.results[0].geometry.location;
                    setCoordinates({ lat, lng });
                } else {
                    console.error('No results found for the provided location.');
                }
            } catch (error) {
                console.error('Error fetching coordinates:', error);
            }
        };
        
        if (location) {
            fetchCoordinates();
        }
    }, [location]);

    return coordinates;
};

// Function to load Google Maps script
export const loadGoogleMapsScript = (callback) => {
    const mapsApiKey = import.meta.env.VITE_API_KEY;

    if (!document.querySelector('script[src*="maps.googleapis.com"]')) {
        const googleMapsScript = document.createElement('script');
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&libraries=marker&callback=${callback}`;
        googleMapsScript.async = true;
        googleMapsScript.defer = true;
        document.body.appendChild(googleMapsScript);
    } else {
        callback();
    }
};

// Basic version of the map implementation:
export const initializeMap = async (coordinates, location) => {
    if (coordinates.lat && coordinates.lng) {
        // Initialize the map
        const map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: coordinates,
            scrollwheel: false,
        });

        // Create and place a basic marker
        const marker = new window.google.maps.Marker({
            position: coordinates,
            map: map,
            title: location,
        });
    } else {
        console.error('Invalid coordinates:', coordinates);
    }
};