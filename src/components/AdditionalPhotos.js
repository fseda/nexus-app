import React from 'react';
import styled from 'styled-components';

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 1rem; 
  margin: 1rem auto; 
  justify-items: center;
  align-items: center;
`;

const Photo = styled.div`
  width: 150px;
  height: 120px;
  overflow: hidden; 
  border-radius: 8px;

  @media (min-width: 600px) {
    width: 120px;
  }

  @media (min-width: 500px) {
    width: 120px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.03); 
    transition: transform 0.3s ease-in-out;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }
`;

const AdditionalPhotos = ({ photos }) => {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className='additionalPhotosHeading'>Fotos Adicionais</h3>
      <PhotoGrid>
        {photos.map((photo, index) => (
          <Photo key={index}>
            <img src={`/nexus-app/assets/${photo.url}`} alt={photo.url} />
          </Photo>
        ))}
      </PhotoGrid>
    </div>
  );
};

export default AdditionalPhotos;

