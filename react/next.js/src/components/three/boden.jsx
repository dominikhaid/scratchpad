import React from "react";

export default function Boden(props) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color="rgb(5, 5, 5)" />
    </mesh>
  );
}
