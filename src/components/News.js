import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Section from './Section';
import { Heading, Subheading, Text } from './Typography';

const TeamWrapper = styled(Section)`
  background: black;
`;

const News = () => (
  <TeamWrapper centered>
    <Container>
      <Heading>Welcome to News</Heading>
      <Subheading>This is the News page</Subheading>
      <Text>Lorem ipsum bla bla bla</Text>
    </Container>
  </TeamWrapper>
);

export default News;
