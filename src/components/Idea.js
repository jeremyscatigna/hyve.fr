import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Section from './Section';
import { Heading, Subheading, Text } from './Typography';

const IdeaWrapper = styled(Section)`
  background: black;
`;

const Idea = () => (
  <IdeaWrapper centered>
    <Container>
      <Heading>Welcome to idea</Heading>
      <Subheading>This is the idea page</Subheading>
      <Text>Lorem ipsum bla bla bla</Text>
    </Container>
  </IdeaWrapper>
);

export default Idea;
