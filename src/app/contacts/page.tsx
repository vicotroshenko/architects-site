import ContactsPage from '@/components/ContactsPage/ContactsPage.component';
import { MapProvider } from '@/providers/map-provider';
import React from 'react';

const page = () => {
  return (
    <MapProvider>
      <ContactsPage />
    </MapProvider>
  );
};

export default page;
