import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, forwardRef } from 'react';
import styled from 'styled-components';
import * as colors from '../colors';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 50rem) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 70%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 50rem) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const LeftBlock = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding-right: 3rem;

  @media only screen and (max-width: 50rem) {
    flex: 1;
    align-items: center;
  }
`;

const RightBlock = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 50rem) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  height: 40rem;
  object-fit: contain;
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 50rem) {
    height: 20rem;
  }

  @keyframes animate {
    to {
      transform: translateY(3rem) rotate(10deg);
    }
  }
`;

const Description = styled.div`
  display: flex;
  font-size: 1.2rem;

  @media only screen and (max-width: 50rem) {
    padding: 2rem;
    text-align: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 6rem;

  @media only screen and (max-width: 50rem) {
    text-align: center;
  }
`;

const Home = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Container>
        <LeftBlock>
          <Title>Animate Your Imagination</Title>
          <Description>
            Dive deep into the ocean of your mind, and you'll discover a
            treasure trove of untapped potential. Think of us as the compass
            guiding you through the stormy seas, helping you navigate towards a
            destination where your imagination knows no bounds. So, why settle
            for the ordinary when the extraordinary is within reach? Animate
            your imagination, and discover a universe where anything is
            possible.
          </Description>
        </LeftBlock>
        <RightBlock>
          <Canvas style={{ position: 'relative', zIndex: 1 }}>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1.5} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 100]} scale={2}>
                <MeshDistortMaterial
                  color={colors.primaryColor}
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="/src/assets/img/rabbit1.png"></Img>
        </RightBlock>
      </Container>
    </Section>
  );
});

export default Home;
