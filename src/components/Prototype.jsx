import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Bunny from '../models/Bunny';
import { Desc } from '../commonStyles';

const Prototype = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Bunny />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate={true} />
        </Suspense>
      </Canvas>
      <Desc>A prototype is worth a thousand meetings.</Desc>
    </>
  );
};

export default Prototype;
