import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

const DodecahedronGeometry = ({ color }) => {
  const meshRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    function onClick(event) {
      if (event.target.id !== gl.domElement.id) {
        return;
      }
      if (color) {
        // Normalize mouse position
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera); // Using camera from useThree
        const intersects = raycaster.intersectObjects([meshRef.current]);

        if (intersects.length > 0) {
          const material = intersects[0].object.material;
          if (material && material.color) {
            material.color.setHex(Math.random() * 0xffffff);
          }
        }
      }
    }

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [camera, color, gl.domElement]);

  return (
    <mesh ref={meshRef} scale={[4, 4, 4]}>
      <dodecahedronBufferGeometry args={[1]} />

      {!color && <meshNormalMaterial />}
      {color && <meshLambertMaterial color={0x718ec4} />}
    </mesh>
  );
};

export default DodecahedronGeometry;
