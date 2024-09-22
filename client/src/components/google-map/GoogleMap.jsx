'use client'
import React, { useEffect } from 'react';
import { useCoordinates, loadGoogleMapsScript, initializeMap } from '../../hooks/useMaps'; // Import the custom hook and functions

const GoogleMap = ({ location }) => {
    const coordinates = useCoordinates(location);

    useEffect(() => {
        if (coordinates.lat && coordinates.lng) {
            loadGoogleMapsScript(() => initializeMap(coordinates, location));
        }
    }, [coordinates, location]);

    return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default GoogleMap;