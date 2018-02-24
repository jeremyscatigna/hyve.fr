import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import Container component
import Button from './../components/Button';
import Container from './../components/Container';
import Section from './../components/Section';

// Import Typography components
import { Heading, Subheading } from './../components/Typography';

const HomeWrapper = styled(Section)`
  background-image: url(https://source.unsplash.com/qMFSP1xYVTQ/480x800);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 480px) {
    background-image: url(https://source.unsplash.com/qMFSP1xYVTQ/768x1024);
  }

  @media (min-width: 768px) {
    background-image: url(https://source.unsplash.com/qMFSP1xYVTQ/1280x800);
  }

  @media (min-width: 1280px) {
    background-image: url(https://source.unsplash.com/qMFSP1xYVTQ/1600x900);
  }

  @media (min-width: 1600px) {
    background-image: url(https://source.unsplash.com/qMFSP1xYVTQ/1920x1080);
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
  }

  ${Container} {
    position: relative;
    z-index: 2;
    color: #fff;
  }

  ${Subheading} {
    margin-bottom: 32px;
  }
`;

// Using Button component but changing the element to 'a'
const HomeButton = Button.withComponent('a');

const Homepage = () => (
  <HomeWrapper centered>
    <Container>
      <Heading>Emotions in the palm of your hand</Heading>

      <HomeButton href="http://tickets.hyvegroup.com">Buy Tickets</HomeButton>
    </Container>
  </HomeWrapper>
);


export default Homepage;
