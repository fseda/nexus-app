import React, { useState } from 'react';
import styled from 'styled-components';
import AddressComponent from './AddressComponent';
import AdditionalPhotos from './AdditionalPhotos';
import MapComponent from './MapComponent';

const Post = styled.div`
  width: 600px;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  overflow: hidden;
  margin: 20px;
  background-color: #F6F6F6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

const PostContent = styled.div`
  padding: 5px 15px 15px 15px;
  font-family: Lato;
  text-align: left;
`;

const PostTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0px auto;
  font-weight: 700;
`;

const PostDescription = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: #000;
`;

const DetailsButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const PostInteraction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f5f5f5;
`;

const InteractionSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: #3498db;
  }
`;

const Separator = styled.div`
  height: 0.0625rem;
  width: 100%;
  background-color: #00000021;
`;

const PostComponent = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Post>
      <PostImage src={process.env.PUBLIC_URL + "/assets/" + post.imgUrl} alt={post.name} />
      <PostContent>
        <PostTitle>{post.title}</PostTitle>
        <AddressComponent address={post.address} postalCode={post.postalCode} />
        <PostDescription>{post.description}</PostDescription>
        <DetailsButton onClick={toggleExpansion}>
          Ver detalhes
        </DetailsButton>
        {isExpanded && (
          // Conteúdo adicional a ser mostrado quando o card estiver expandido
          <div>
            {/* Renderize mais fotos e informações de geolocalização aqui */}
            {/* Exemplo: */}
            <AdditionalPhotos>
              <img src={process.env.PUBLIC_URL + "/assets/photo1.jpg"} alt="Photo 1" />
              <img src={process.env.PUBLIC_URL + "/assets/photo2.jpg"} alt="Photo 2" />
            </AdditionalPhotos>
            <MapComponent latitude={post.latitude} longitude={post.longitude} />
          </div>
        )}
      </PostContent>
      <Separator />
      <PostInteraction>
        <InteractionSpan>
          <img src={process.env.PUBLIC_URL + "/assets/heart.svg"} alt="" />
          {post.likes}
        </InteractionSpan>
        <InteractionSpan>
          <img src={process.env.PUBLIC_URL + "/assets/comment.svg"} alt="" />
          {post.comments}
        </InteractionSpan>
        <InteractionSpan>
          <img src={process.env.PUBLIC_URL + "/assets/bookmark.svg"} alt="" />
        </InteractionSpan>
      </PostInteraction>
    </Post>
  );
};

export default PostComponent;