'use client';

import { GoogleMap, MarkerF } from '@react-google-maps/api';
import React from 'react';

export const defaultMapContainerStyle = {
  maxWidth: '605px',
  height: '501px',
  borderRadius: '5px 5px 5px 5px',
};
const defaultMapCenter = {
  lat: 50.37,
  lng: 30.21,
};
const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'roadmap',
  clickableIcons: true,
};

const Map = () => {
  return (
    <div className="w-full max-w-[605px]">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <MarkerF
          position={defaultMapCenter}
          onLoad={() => console.log('Marker Loaded')}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
