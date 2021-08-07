import React, {useEffect, useRef} from 'react';
import {useThree, useFrame} from 'react-three-fiber';
import {useSpring, a} from '@react-spring/three';

export default function CoustomCamera(props) {
  const ref = useRef();
  const spring = useSpring({
    rotation: props.rotation,
    position: props.position,
    zoom: props.zoom,
  });

  const {setDefaultCamera} = useThree();
  useEffect(() => {
    void setDefaultCamera(ref.current);
    // eslint-disable-next-line
  }, []);

  useFrame(() => {
    ref.current.updateMatrixWorld();
  });

  return <a.perspectiveCamera ref={ref} {...spring} fov={70} near={0.1} />;
}
