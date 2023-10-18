/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 air.gltf --transform 
Files: air.gltf [40.37KB] > air-transformed.glb [56.65KB] (-40%)
Author: BlendWith1 (https://sketchfab.com/BlendWith1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hot-air-balloon-low-poly-d9d29d66ef604438a4f4e562ca150ca5
Title: Hot Air Balloon Low Poly
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/air-transformed.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
        position={[-0.008, 10.335, -0.437]}
        scale={[0.762, 0.385, 0.762]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials['Material.002']}
        position={[-0.008, 8.556, -0.437]}
        scale={[1.171, 0.591, 1.171]}
      />
    </group>
  );
}

useGLTF.preload('/air-transformed.glb');