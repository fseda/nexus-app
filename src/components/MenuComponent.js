import styled from 'styled-components';

const MenuIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  margin-top: 20px;
  background-image: url('/assets/ellipse-1.svg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLines = styled.div`
  width: 20px;   
  height: 20px;  
  background-image: url('/assets/hamburger-menu.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
`;
const MenuComponent = () => (
  <MenuIconWrapper>
    <StyledLines />
  </MenuIconWrapper>
);

export default MenuComponent;