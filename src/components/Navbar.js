import React from 'react';
import styled, { css } from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
`;

const NavWrapper = styled.nav`
  padding: 16px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 479px) {
    flex-direction: column;
    align-items: flex-end;

    /* If navigation is open (show is true) */
    ${props => props.isOpen && css`
      ul {
        position: absolute;
        top: 64px;
        max-height: 1000px;
      }
    `}
  }
`;

const NavList = styled.ul`
  margin: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  list-style-type: none;
  height: auto;
  max-height: 0;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
    max-height: 1000px;
  }
`;

const NavItem = styled.li`
  & + & {
    margin-top: 12px;
  }

  @media (min-width: 480px) {
    & + & {
      margin-top: 0;
      margin-left: 32px;
    }
  }

  a {
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: black;
    transition: color .25s ease-in-out;

    &:hover {
      color: #888;
    }
  }
`;

const Navbar = () => (
  <Header>
    <NavWrapper>
      <NavList>
        <NavItem>
          <a href="/">Home</a>
        </NavItem>

        <NavItem>
          <a href="/about">About</a>
        </NavItem>

        <NavItem>
          <a href="/contact">Contact</a>
        </NavItem>
      </NavList>
    </NavWrapper>
  </Header>
);

export default Navbar;
