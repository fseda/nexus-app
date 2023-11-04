import { styled } from 'styled-components';

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 90%;
  max-width: 600px;
  height: 2rem;
  background-color: #f6f6f6;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 16px;

  @media (max-width: 650px) {
    height: 2rem;
  } 
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 90%;
  max-width: 600px;
  height: 4rem;
  background-color: transparent;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
`
