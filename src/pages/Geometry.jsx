import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, forwardRef, useState } from 'react';
import styled from 'styled-components';
import * as colors from '../colors';
import DodecahedronGeometry from '../components/DodecahedronGeometry';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100%;
  height: 100vh;

  scroll-snap-align: center;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const LeftBlock = styled.div`
  flex: 1;
  padding-right: 3rem;
  max-height: 100vh;
  overflow: hidden;
  @media only screen and (max-width: 50rem) {
    display: none;
  }
`;

const RightBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media only screen and (max-width: 50rem) {
    align-items: center;
    text-align: center;
  }
`;

const Description = styled.div`
  user-select: none;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 6rem;
  user-select: none;

  @media only screen and (max-width: 50rem) {
    text-align: center;
    font-size: 5rem;
  }
`;

const Button = styled.button`
  user-select: none;
  margin-top: 2rem;
  padding: 1rem;
  background-color: ${colors.buttonColor};
  color: ${colors.primaryColor};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Geometry = forwardRef((props, ref) => {
  const [color, setColor] = useState(false);

  return (
    <Section ref={ref}>
      <Container>
        <LeftBlock>
          <Canvas camera={{ position: [15, 15, 15], fov: 45 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.3} />
              <directionalLight castShadow position={[1, 10, 5]} />
              <DodecahedronGeometry color={color} />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </LeftBlock>
        <RightBlock>
          <Title>Think Proactively</Title>
          <Description>
            Adopt a mindset that anticipates, rather than reacts. Encourage
            yourself to make calculated moves that prepare you for what's next.
          </Description>
          <Button
            style={{
              background: color ? colors.gradientBg : colors.buttonColor,
            }}
            onClick={() => setColor(!color)}
          >
            {color ? 'Show rgb' : 'Check it out'}
          </Button>
        </RightBlock>
      </Container>
    </Section>
  );
});

export default Geometry;
