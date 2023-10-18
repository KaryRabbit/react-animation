import styled from 'styled-components';

export const Desc = styled.div`
  max-width: 25rem;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  position: absolute;
  bottom: 15rem;
  left: 15rem;
  font-size: 1.5rem;
  text-align: center;

  @media only screen and (max-width: 50rem) {
    top: 0;
    bottom: 0;
    font-size: 0.8rem;
    padding: 1rem;
    max-height: 3rem;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
