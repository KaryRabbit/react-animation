import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Air from '../models/Air';
import { Desc } from '../commonStyles';

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Air />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate={true} />
        </Suspense>
      </Canvas>
      <Desc>
        Imagination is the raw material, creativity is the process, and
        innovation is the product.
      </Desc>
    </>
  );
};

export default WebDesign;
