// NotFoundComponent.js
import React from 'react';
import styled from 'styled-components';

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin: 100px auto;
  padding: 0 10px;
`;

const NotFoundMessage = styled.p`
  color: #888;
  font-size: 16px;
`;

const NotFound = ({ message }) => (
  <NotFoundWrapper>
    <NotFoundMessage>{message}</NotFoundMessage>
  </NotFoundWrapper>
);

export default NotFound;
