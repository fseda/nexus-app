import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ userLocation }) => {
  const center = userLocation || [-23.006046, -43.313355]; // Defina um centro padrão caso `userLocation` seja indefinido
  const zoom = 13;

  return (
    <MapContainer center={center} zoom={zoom} style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {userLocation && (
        <Marker position={userLocation}>
          <Popup><h3>Minha Localização</h3></Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
