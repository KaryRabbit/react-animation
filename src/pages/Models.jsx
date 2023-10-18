import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import * as colors from '../colors';
import WebDesign from '../components/WebDesign';
import Imagination from '../components/Imagination';
import Balance from '../components/Balance';
import Prototype from '../components/Prototype';

const items = ['Web Design', 'Balance', 'Prototyping', 'Imagination'];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-weight: 300;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 50rem) {
    width: 100%;
    flex-direction: column;
  }
`;

const LeftBlock = styled.div`
  flex: 1;
  padding-right: 3rem;
  @media only screen and (max-width: 50rem) {
    margin-top: 5rem;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: 50rem) {
    gap: 1rem;
    padding: 0;
  }
`;

const ListItem = styled.li`
  font-size: 4rem;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 0.1rem white;
  position: relative;

  ::after {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: ${colors.buttonColor};
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 50rem) {
    font-size: 2rem;
    color: white;
    -webkit-text-stroke: 0;
  }
`;

const RightBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 50rem) {
    margin-top: 5rem;
    padding: 3rem;
    justify-content: center;
  }
`;

const Models = forwardRef((props, ref) => {
  const [example, setExample] = useState('UX');

  return (
    <Section ref={ref}>
      <Container>
        <LeftBlock>
          {example === 'Web Design' ? (
            <WebDesign />
          ) : example === 'Balance' ? (
            <Balance />
          ) : example === 'Prototyping' ? (
            <Prototype />
          ) : example === 'Imagination' ? (
            <Imagination />
          ) : (
            <WebDesign />
          )}
        </LeftBlock>
        <RightBlock>
          <List>
            {items.map((item) => (
              <ListItem key={item} text={item} onClick={() => setExample(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </RightBlock>
      </Container>
    </Section>
  );
});

export default Models;
