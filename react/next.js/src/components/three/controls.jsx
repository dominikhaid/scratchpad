import React, { useRef } from "react";
import { useThree, useUpdate } from "react-three-fiber";

export default function Controls() {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useUpdate(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate
      // maxPolarAngle={Math.PI / 3}
      // minPolarAngle={Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  );
}
