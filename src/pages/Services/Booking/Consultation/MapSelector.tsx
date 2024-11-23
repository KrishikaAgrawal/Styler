import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const MapSelector: React.FC = () => {
  const [selectedPosition, setSelectedPosition] =
    useState<google.maps.LatLngLiteral | null>(null);

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_API_KEY_HERE", // Replace with your API key
  });

  // Handle map click
  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setSelectedPosition({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div className="w-full h-[500px] border rounded shadow-md">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat: 28.6139, lng: 77.209 }} // Default center (Delhi)
        zoom={8}
        onClick={onMapClick}
      >
        {/* Display Marker */}
        {selectedPosition && <Marker position={selectedPosition} />}
      </GoogleMap>

      {/* Display Selected Location */}
      {selectedPosition && (
        <div className="mt-4 text-sm text-gray-700">
          Selected Location: Latitude {selectedPosition.lat}, Longitude{" "}
          {selectedPosition.lng}
        </div>
      )}
    </div>
  );
};

export default MapSelector;
