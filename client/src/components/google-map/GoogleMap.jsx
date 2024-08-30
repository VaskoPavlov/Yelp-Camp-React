import React, { useEffect, useState } from 'react';

const GoogleMap = ({ lat, lng, name, location, description }) => {
    const [coordinates, setCoordinates] = useState({ lat, lng });

    useEffect(() => {
        if (!lat || !lng) {
            // If latitude or longitude is not provided, use Geocoding API to fetch them
            const fetchCoordinates = async () => {
                try {
                    const response = await fetch(
                        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=AIzaSyDo8_p22qm4NrOA3wQWXS_NKY-xWTZngMc`
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
        }
    }, [lat, lng, location]);

    useEffect(() => {
        const googleMapsScript = document.createElement('script');
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDo8_p22qm4NrOA3wQWXS_NKY-xWTZngMc&callback=initMap`;
        window.document.body.appendChild(googleMapsScript);
        googleMapsScript.addEventListener('load', () => {
            initMap();
        });
    }, [coordinates]);

    const initMap = () => {
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 9,
            center: coordinates,
            scrollwheel: false,
        });

        const contentString = `
            <strong>${name}</strong><br />
            ${location}<br />
            <p>${description}</p>
        `;
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        const marker = new google.maps.Marker({
            position: coordinates,
            map: map,
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });
    };

    return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default GoogleMap;
