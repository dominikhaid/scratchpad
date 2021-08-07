import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import React, {useState} from 'react';
import {Canvas, useThree, extend, useLoader} from 'react-three-fiber';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import MainDimmer from '@/components/loader/MainDimmer';

// import Controls from './controls';
import Boden from './boden';
import World from './world';
import CoustomCamera from './camera';
import Blender from './blender';
import Ui from './ui';

var reflectionCube, refractionCube;

const loadReflactionMap = () => {
  var path = '/textures/cubemap/final/';
  var format = '.png';
  var urls = [
    path + 'px' + format,
    path + 'nx' + format,
    path + 'py' + format,
    path + 'ny' + format,
    path + 'pz' + format,
    path + 'nz' + format,
  ];

  reflectionCube = new THREE.CubeTextureLoader().load(urls);
  refractionCube = new THREE.CubeTextureLoader().load(urls);
  refractionCube.mapping = THREE.CubeRefractionMapping;
};

loadReflactionMap();
extend({OrbitControls});

export default function ThreeScene(props) {
  console.debug('About Me', props);
  const baseZoom = 10;
  const size = useThree();
  const {nodes} = useLoader(GLTFLoader, `/scene/three.glb`);
  const [loading, setLoading] = useState(true);
  const [models, setModels] = useState(false);

  const [cam, setCam] = useState({
    rotation: [0, (90 * Math.PI) / 180, 0],
    angle: 15,
    fov: 70,
    zoom: 1,
    position: [baseZoom, 2, 1],
  });

  return (
    <div
      id="threeJsAboutMe"
      className="material-grid__col--medium--12 flex-center padding-remove margin-remove"
    >
      <Canvas
        id="ThreeCanvas"
        resize={{scroll: false}}
        style={{
          widht: '100%',
        }}
        onCreated={({gl}) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <World refractionCube={refractionCube} />
        <CoustomCamera
          {...cam}
          aspect={size.width / size.height}
          radius={(size.width + size.height) / 4}
        />
        <Blender
          active={false}
          baseZoom={baseZoom}
          position={[0, 1, 0]}
          reflectionCube={reflectionCube}
          nodes={nodes}
          models={models}
          setLoading={setLoading}
          setModels={setModels}
          castShadow
        />
        <ambientLight color={'white'} intensity={0.1} />
        <spotLight
          intensity={2}
          position={[10, 10, 1]}
          angle={(45 * Math.PI) / 180}
          penumbra={1}
          castShadow
          color={'white'}
          distance={20}
        />
        <Boden position={[0, 0, 0]} receiveShadow />
      </Canvas>
      {loading ? (
        <MainDimmer state={loading} msg={'Loading 3D Content ~ 3.0mb'} />
      ) : (
        <Ui
          setCam={setCam}
          cam={cam}
          nodes={nodes}
          reflectionCube={reflectionCube}
          models={models}
        />
      )}
    </div>
  );
}
