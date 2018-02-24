import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 768px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: orange;
`;

const Homepage = () => (
  <Container>
    <Title>Welcome to Hyve</Title>
  </Container>
);

export default Homepage;
