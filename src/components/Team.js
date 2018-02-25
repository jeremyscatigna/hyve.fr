import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Section from './Section';
import { Heading, Subheading, Text } from './Typography';
import BubbleImage from './BubbleImage';
import Me from '../images/me.png';

const TeamWrapper = styled(Section)`
  background: black;

  ${Container} {
    display: flex;
    justify-content: center;
  }

  ${Text} {
    margin-top: 10px;
    margin-left: 40px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Team = () => (
  <TeamWrapper centered>
    <Container>
      <Heading>Meet the team</Heading>
      <ImageContainer>
        <BubbleImage src={Me} alt="Me" />
        <Text>CTO</Text>
      </ImageContainer>

      <ImageContainer>
        <BubbleImage src={Me} alt="Me" />
        <Text>CTO</Text>
      </ImageContainer>

      <ImageContainer>
        <BubbleImage src={Me} alt="Me" />
        <Text>CTO</Text>
      </ImageContainer>

      <ImageContainer>
        <BubbleImage src={Me} alt="Me" />
        <Text>CTO</Text>
      </ImageContainer>
    </Container>
  </TeamWrapper>
);

export default Team;
