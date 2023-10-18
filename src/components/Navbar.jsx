import React from 'react';
import styled from 'styled-components';
import * as colors from '../colors';

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media only screen and (max-width: 50rem) {
    width: 100%;
    padding: 1rem;
  }
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;

  @media only screen and (max-width: 50rem) {
    width: 100%;
    padding: 2rem;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
`;

const Logo = styled.img`
  height: 3rem;
`;

const List = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media only screen and (max-width: 50rem) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
  width: 2rem;
  cursor: pointer;
`;

const Button = styled.button`
  width: 10rem;
  padding: 1rem;
  background-color: ${colors.buttonColor};
  color: ${colors.primaryColor};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Navbar = ({ refs }) => {
  const scrollToRef = (ref) => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.svg" />
          <List>
            <ListItem onClick={() => scrollToRef(refs.home)}>Home</ListItem>
            <ListItem onClick={() => scrollToRef(refs.geometry)}>
              Geometry
            </ListItem>
            <ListItem onClick={() => scrollToRef(refs.models)}>Models</ListItem>
            <ListItem onClick={() => scrollToRef(refs.contact)}>
              Contact
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Button onClick={() => scrollToRef(refs.contact)}>Try Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
