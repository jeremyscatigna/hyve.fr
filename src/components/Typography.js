// Typography.js
import styled from 'styled-components';

export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 36px;
  font-weight: bold;
  color: white;
}

  @media (min-width: 480px) {
    font-size: 48px;
  }

  @media (min-width: 768px) {
    font-size: 68px;
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`;

export const Subheading = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: normal;
  color: white;

  @media (min-width: 480px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  // Styles for handling spacing between typography elements
  & + h1,
  & + h2,
  & + p {
    margin-top: 21px;
  }
`;

export const Text = styled.p`
  margin-top: 0;
  font-size: 16px;
  color: white;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 992px) {
    font-size: 21px;
  }

  & + & {
    margin-top: 32px;
  }
`;
