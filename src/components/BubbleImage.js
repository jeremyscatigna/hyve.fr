import styled from 'styled-components';

const BubbleImage = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 100%;
  cursor: pointer;
  margin-left: 40px;
  margin-top: 40px;
  transition: width .5s ease-in-out, height .5s ease-in-out, filter 0.5s ease-in-out;

  &:hover {
    width: 200px;
    height: 200px;
    filter: opacity(30%);
  }
`;

export default BubbleImage;
