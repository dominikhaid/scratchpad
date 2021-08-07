import React, {useRef, useEffect} from 'react';

export default function Blender({url, nodes, ...props}) {
  const monitor = useRef();
  const magazin = useRef();
  const visitenkarten = useRef();

  const redefineMaterials = () => {
    nodes.monitor_1_0.material.envMap = props.reflectionCube;
    nodes.handy_1_0.material.envMap = props.reflectionCube;
    nodes.tablet_1_0.material.envMap = props.reflectionCube;
  };

  useEffect(() => {
    // eslint-disable-next-line

    props.setModels([
      {obj: monitor.current, topView: false, rotation: true},
      {
        obj: visitenkarten.current,
        topView: true,
        rotation: false,
      },
      {obj: magazin.current, topView: true, rotation: true},
    ]);
    props.setLoading(false);
    return () => {};
    // eslint-disable-next-line
  }, []);

  redefineMaterials();

  return (
    <>
      <group
        name={'monitor'}
        position={[0, 0.8, 1]}
        ref={monitor}
        focused={4}
        zoomed={3}
        castShadow
      >
        <primitive object={nodes.monitor_1_0} />
        <primitive object={nodes.monitor_2_1} />
      </group>

      <group position={props.position}>
        <primitive object={nodes.handy} position={[3.5, -0.98, 2]} castShadow />
      </group>

      <group position={props.position}>
        <primitive object={nodes.tablet} position={[2, -0.98, 0]} castShadow />
      </group>

      <group
        name={'visitenkarten'}
        position={[1.8, 0.05, 2]}
        focused={4}
        zoomed={0.8}
        rotation={[0, (-90 * Math.PI) / 180, 0]}
        ref={visitenkarten}
        object={nodes.visitenkarten}
        castShadow
      >
        <primitive object={nodes.visitenkarten_1_0} />
        <primitive object={nodes.visitenkarten_2_1} />
        <primitive object={nodes.visitenkarten_3_2} />
      </group>

      <group
        name={'magazin'}
        position={[3.8, 0.05, 0]}
        scale={[1.8, 1.8, 1.8]}
        focused={4}
        zoomed={1.5}
        ref={magazin}
        object={nodes.magazin}
        castShadow
      >
        <primitive object={nodes.magazin_1_0} />
        <primitive object={nodes.magazin_2_1} />
      </group>
    </>
  );
}
