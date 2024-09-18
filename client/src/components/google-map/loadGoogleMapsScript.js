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