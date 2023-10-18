import React, { useRef } from 'react';
import styled from 'styled-components';
import './App.css';
import * as colors from './colors';
import Geometry from './pages/Geometry';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Models from './pages/Models';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;

  overflow-y: auto;
  scroll-behavior: smooth;
  background: url('/img/bg.jpg');
  background-size: cover;
  color: ${colors.primaryColor};
  &::-webkit-scrollbar {
    display: none;
  }
`;
function App() {
  const homeRef = useRef(null);
  const geometryRef = useRef(null);
  const modelsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Container>
        <Navbar
          refs={{
            home: homeRef,
            geometry: geometryRef,
            models: modelsRef,
            contact: contactRef,
          }}
        />
        <Home ref={homeRef} />
        <Geometry ref={geometryRef} />
        <Models ref={modelsRef} />
        <Contact ref={contactRef} />
      </Container>
    </>
  );
}

export default App;
