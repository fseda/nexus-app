import React from 'react';

const AdditionalPhotos = ({ photos }) => {
  if (!photos || !photos.length) {
    return null; // Não renderize nada se photos for undefined ou vazio
  }

  return (
    <div>
      <h2>Fotos Adicionais</h2>
      <div className="additional-photos">
        {photos.map((photo, index) => (
          <div key={index} className="additional-photo">
            <img src={photo.url} alt={`Foto ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalPhotos;

