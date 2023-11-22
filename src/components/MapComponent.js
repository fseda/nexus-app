import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components'

const Map = styled.div`
  border-radius: 8px;
  margin: 0 auto;
`

const MapComponent = ({ title, coordinates }) => {
  const center = coordinates || [-23.006046, -43.313355];
  const zoom = 13;

  return (
    <Map>
      <MapContainer center={center} zoom={zoom} style={{ width: '100%', height: '400px' }} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyrigth">OpenStreetMap</a> contributors'
        />
        {coordinates && (
          <Marker position={coordinates}>
            <Popup>
              <h3>{title}</h3>
              <a target="_blank" rel="noopener noreferrer" href={ `https://www.google.com/maps/dir/?api=1&destination=${coordinates[0]},${coordinates[1]}` }>Ver rotas no Google Maps</a>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </Map>
  );
};

export default MapComponent;
