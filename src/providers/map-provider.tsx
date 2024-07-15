'use client';

import Loader from '@/components/Loader/Loader.component';
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';


const libraries = ['places', 'drawing', 'geometry'];

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCDqKjy5v3NOe7c_Ev2MrP3MZWHeAQaSks',
    libraries: libraries as Libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return <Loader />;

  return children;
}