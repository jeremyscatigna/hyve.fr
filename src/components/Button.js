import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  background: white;
  border-radius: 45px;
  cursor: pointer;
  transition: color .25s ease-in-out;

  &:hover {
    color: #888;
  }
`;

export default Button;
