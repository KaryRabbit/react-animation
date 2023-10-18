import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Yin from '../models/Yin';
import { Desc } from '../commonStyles';

const Balance = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Yin />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate={true} />
        </Suspense>
      </Canvas>
      <Desc>
        Striking the right balance between form and function, creativity and
        utility, or innovation and tradition can make or break a design's
        impact.
      </Desc>
    </>
  );
};

export default Balance;
