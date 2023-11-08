import React, { useState } from 'react';
import styled from 'styled-components';
import AddressComponent from './AddressComponent';
import AdditionalPhotos from './AdditionalPhotos';
import MapComponent from './MapComponent';

const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 30rem;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  overflow: hidden;
  margin: 0.5rem;
  background-color: #F6F6F6;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const PostContent = styled.div`
  padding: 0.4rem 1rem 1rem 1rem;
  font-family: Lato;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PostTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 700;
`;

const PostDescription = styled.p`
  max-height: 16rem;
  overflow-y: auto;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #000;

  @media (max-width: 768px) {
    max-height: 32rem;
  }
`;

const ExpandButton = styled.button`
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
  padding: 0.8rem;
  background-color: #f5f5f5;
  border-top: 0.0625rem solid #00000021;
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

const PostExpanded = styled.div`
  padding: 0.8rem;
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0;  
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PostComponent = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const additionalPhotos = post.additionalPhotos ?? [];

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Post>
      <PostImage src={`/assets/${post.imgUrl}`} alt={post.name} />
      <PostContent>
        <PostHeader>
          <PostDetails>
            <PostTitle>{post.title}</PostTitle>
            <AddressComponent address={post.address} postalCode={post.postalCode} />
          </PostDetails>
          <ExpandButton onClick={toggleExpansion}>
            {isExpanded ? "Esconder detalhes" : "Mostrar detalhes"}
          </ExpandButton>
        </PostHeader>
        <PostDescription>{post.description}</PostDescription>
        
        {isExpanded && (
          <PostExpanded>
            <AdditionalPhotos 
              className="additional-photos"
              photos={additionalPhotos.map((photo) => { 
                return { url: photo }
              })}
            />
            <MapComponent title={post.title} coordinates={post.coordinates} />
          </PostExpanded>
        )}

      </PostContent>
      <PostInteraction>
        <InteractionSpan>
          <img src={"/assets/heart.svg"} alt="" />
          {post.likes}
        </InteractionSpan>
        <InteractionSpan>
          <img src={"/assets/comment.svg"} alt="" />
          {post.comments}
        </InteractionSpan>
        <InteractionSpan>
          <img src={"/assets/bookmark.svg"} alt="" />
        </InteractionSpan>
      </PostInteraction>
    </Post>
  );
};

export default PostComponent;