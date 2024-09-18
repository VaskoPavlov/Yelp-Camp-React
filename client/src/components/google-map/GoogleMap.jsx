import React, { useEffect, useState, useCallback } from 'react';
import { loadGoogleMapsScript } from './loadGoogleMapsScript'; // Import the script loading function

const mapsApiKey = import.meta.env.VITE_API_KEY;

const GoogleMap = ({ location }) => {
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  // Fetch coordinates using geocoding
  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${mapsApiKey}`
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
    fetchCoordinates();
  }, [location]);

  // Initialize map and marker
  const initMap = useCallback(async () => {
    if (coordinates.lat && coordinates.lng) {
      // Ensure the Google Maps library for markers is imported
      const { AdvancedMarkerElement, PinElement } = await window.google.maps.importLibrary('marker');

      // Initialize the map
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: coordinates,
        scrollwheel: false,
      });

      // Create and place the advanced marker
      const pinElement = new PinElement();
      const marker = new AdvancedMarkerElement({
        position: coordinates,
        map: map,
        title: location,
        mapId: 'Demo_id',
        content: pinElement,
      });
    } else {
      console.error('Invalid coordinates:', coordinates);
    }
  }, [coordinates]);

  // Load Google Maps script
  useEffect(() => {
    loadGoogleMapsScript(initMap);
  }, [initMap]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default GoogleMap;