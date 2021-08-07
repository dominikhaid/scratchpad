import React, { useRef } from "react";
import * as THREE from "three";
import { useThree } from "react-three-fiber";

export default function World() {
  const ref = useRef();
  const { scene } = useThree();

  return (
    <scene ref={ref}>
      <mesh>
        <sphereGeometry attach="geometry" args={[20, 32, 32]} />
        <meshPhysicalMaterial
          attach="material"
          roughness={0.5}
          color="rgb(5, 5, 5)"
          side={THREE.BackSide}
        />
      </mesh>
    </scene>
  );
}
