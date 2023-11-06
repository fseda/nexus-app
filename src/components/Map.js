import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = (coordinates) => {
  return (
    <MapContainer
      center={[coordinates.latitude, coordinates.longitude]} // Certifique-se de que estas coordenadas estejam corretas
      zoom={13} // Ajuste o nível de zoom conforme necessário
      style={{ width: '100%', height: '800px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Map;
