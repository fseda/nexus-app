import styled from 'styled-components';

const SearchBar = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  padding: 0px 15px;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 20px;
  color: #000;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s;
  &:focus {
    border-color: #3498db;
  }
`;


export default SearchBar;