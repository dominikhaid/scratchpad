import React, {useState} from 'react';
import * as THREE from 'three';
import {Icon} from 'semantic-ui-react';

export default function Ui(props) {
  const [bakTextures, setBakTextures] = useState(false);
  const [activeModel, setActiveModel] = useState(false);
  const [focusedModel, setFocusedModel] = useState(false);
  const [activatedModel, setActivatedModel] = useState(false);

  const baseZoom = 10;
  //const e.focused = 4;
  //const e.zoomed = 1;

  var focusedMaterialWired = new THREE.MeshBasicMaterial({
    name: 'focusedObj',
    color: 0xe8d339,
    envMap: props.reflectionCube,
    reflectivity: 0.4,
    opacity: 1,
    wireframe: true,
  });

  var focusedMaterial = new THREE.MeshBasicMaterial({
    name: 'focusedObj',
    color: 0xf4d100,
    opacity: 1,
    wireframe: true,
  });

  const handleNextFocused = () => {
    let temp = false;
    temp = activeModel + 1;
    if (!activeModel) temp = 0;
    if (activeModel === 0) temp = 1;
    if (activeModel >= props.models.length - 1) temp = 0;
    setActiveModel(temp);
    console.debug(temp);
    return [
      props.models[temp].obj,
      props.models[temp].topView,
      props.models[temp].rotation,
    ];
  };

  const handleLastFocused = () => {
    let temp = false;
    temp = activeModel - 1;
    // eslint-disable-next-line
    if (activeModel == 0) temp = props.models.length - 1;
    if (activeModel <= 0) temp = props.models.length - 1;
    setActiveModel(temp);
    console.debug(temp);
    return [
      props.models[temp].obj,
      props.models[temp].topView,
      props.models[temp].rotation,
    ];
  };

  const handleActiv = () => {
    return [
      props.models[activeModel].obj,
      props.models[activeModel].topView,
      props.models[activeModel].rotation,
    ];
  };

  const focusObj = (e, topdown, side) => {
    e.children.map(element => {
      console.log(element.material.map);
      element.material.map === null
        ? (element.material = focusedMaterialWired)
        : (element.material = focusedMaterial);
      return true;
    });

    const pos =
      topdown && side
        ? [e.position.y + e.position.x, e.focused, e.position.z]
        : topdown
        ? [e.position.y + e.position.x, e.focused, e.position.z]
        : side
        ? [e.focused, e.position.y + e.scale.y / 2, e.position.z]
        : [e.focused, e.position.y + e.scale.y / 2, e.position.z];

    const rot =
      topdown && side
        ? [(-90 * Math.PI) / 180, 0, (90 * Math.PI) / 180]
        : topdown
        ? [(-90 * Math.PI) / 180, 0, 0]
        : [0, (90 * Math.PI) / 180, 0];

    props.setCam({
      position: pos,
      zoom: props.cam.zoom,
      rotation: rot,
    });
    if (activatedModel) setActivatedModel(false);
    if (!focusedModel) setFocusedModel(true);
  };

  const unselectAll = e => {
    console.debug('unselect', e);
    e.children.map((element, index) => {
      element.material = bakTextures[index];
      return true;
    });

    props.setCam({
      position: [baseZoom, 2, 1],
      zoom: props.cam.zoom,
      rotation: [0, (90 * Math.PI) / 180, 0],
    });
    if (activatedModel) setActivatedModel(false);
    if (focusedModel) setFocusedModel(false);
  };

  const activateModel = (e, topdown, side) => {
    console.debug('activate', e, topdown, side);
    e.children.map((element, index) => {
      element.material = bakTextures[index];
      return true;
    });
    const pos =
      topdown && side
        ? [e.position.y + e.position.x, e.zoomed, e.position.z]
        : topdown
        ? [e.position.y + e.position.x, e.zoomed, e.position.z]
        : side
        ? [e.zoomed, e.position.y + e.scale.y + 0.8, e.position.z]
        : [e.zoomed, e.position.y + e.scale.y / 2, e.position.z];

    const rot =
      topdown && side
        ? [(-90 * Math.PI) / 180, 0, (90 * Math.PI) / 180]
        : topdown
        ? [(-90 * Math.PI) / 180, 0, 0]
        : [0, (90 * Math.PI) / 180, 0];

    props.setCam({
      position: pos,
      zoom: props.cam.zoom,
      rotation: rot,
    });

    if (!activatedModel) setActivatedModel(true);
    if (focusedModel) setFocusedModel(false);
  };

  const handelCamNav = cursor => {
    const topdown = props.models[activeModel].topView;
    const side = props.models[activeModel].rotation;
    let pos;
    let navUnit = 0.5;
    console.debug(
      'topdown',
      topdown,
      'side',
      side,
      'position',
      props.cam.position,
      'cursor',
      cursor,
    );

    if (cursor === 'left') {
      pos =
        topdown && side
          ? [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2] + navUnit,
            ]
          : topdown
          ? [
              props.cam.position[0] - navUnit,
              props.cam.position[1],
              props.cam.position[2],
            ]
          : side
          ? [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2] + navUnit,
            ]
          : [
              props.cam.position[0] + navUnit,
              props.cam.position[1],
              props.cam.position[2],
            ];
    } else if (cursor === 'right') {
      pos =
        topdown && side
          ? [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2] - navUnit,
            ]
          : topdown
          ? [
              props.cam.position[0] + navUnit,
              props.cam.position[1],
              props.cam.position[2],
            ]
          : side
          ? [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2] - navUnit,
            ]
          : [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2],
            ];
    } else if (cursor === 'up') {
      pos =
        topdown && side && props.cam.position[0] < 5
          ? [
              props.cam.position[0] - navUnit,
              props.cam.position[1],
              props.cam.position[2],
            ]
          : topdown && props.cam.position[2] < 5
          ? [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2] - navUnit,
            ]
          : side && props.cam.position[1] < 5
          ? [
              props.cam.position[0],
              props.cam.position[1] + navUnit,
              props.cam.position[2],
            ]
          : [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2],
            ];
    } else if (cursor === 'down') {
      pos =
        topdown && side && props.cam.position[0] > 0.5
          ? [
              props.cam.position[0] + navUnit,
              props.cam.position[1],
              props.cam.position[2],
            ]
          : topdown && props.cam.position[2] > 0.5
          ? [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2] + navUnit,
            ]
          : side && props.cam.position[1] > 0.5
          ? [
              props.cam.position[0],
              props.cam.position[1] - navUnit,
              props.cam.position[2],
            ]
          : [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2],
            ];
    } else if (cursor === 'in') {
      pos =
        topdown && side && props.cam.position[1] > 0.5
          ? [
              props.cam.position[0],
              props.cam.position[1] - navUnit,
              props.cam.position[2],
            ]
          : topdown && props.cam.position[1] > 0.5
          ? [
              props.cam.position[0],
              props.cam.position[1] - navUnit,
              props.cam.position[2],
            ]
          : side && props.cam.position[0] > 0.5
          ? [
              props.cam.position[0] - navUnit,
              props.cam.position[1],
              props.cam.position[2],
            ]
          : [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2],
            ];
    } else if (cursor === 'out') {
      pos =
        topdown && side && props.cam.position[1] < 6
          ? [
              props.cam.position[0],
              props.cam.position[1] + navUnit,
              props.cam.position[2],
            ]
          : topdown && props.cam.position[1] < 6
          ? [
              props.cam.position[0],
              props.cam.position[1] + navUnit,
              props.cam.position[2],
            ]
          : side && props.cam.position[0] < 6
          ? [
              props.cam.position[0] + navUnit,
              props.cam.position[1],
              props.cam.position[2],
            ]
          : [
              props.cam.position[0],
              props.cam.position[1],
              props.cam.position[2],
            ];
    }

    props.setCam({
      position: pos,
      zoom: props.cam.zoom,
      rotation: props.cam.rotation,
    });
  };

  return (
    <div
      id="aboutMeUi"
      className="flex-con flex-center"
      style={{maxWidth: '400px', borderRadius: '5px'}}
    >
      <h2
        className="primaryColor"
        style={{width: '100%', display: 'block', textAlign: 'center'}}
      >
        {activeModel === 0
          ? 'Lebenslauf'
          : activeModel === 1
          ? 'Info'
          : activeModel === 2
          ? 'Skills'
          : ''}
      </h2>
      <div
        id="threeNavCon"
        aria-label="Pagination Navigation"
        role="navigation"
        className="ui mini pagination menu"
      >
        {!activatedModel ? (
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              const selObj = handleLastFocused();
              function last() {
                if (activeModel !== false) {
                  props.models[activeModel].obj.children.map(
                    (element, index) => {
                      element.material = bakTextures[index];
                      return true;
                    },
                  );
                }
                const temp = selObj[0].children.map(element => {
                  return element.material;
                });
                setBakTextures(temp);
                focusObj(...selObj);
              }
              last();
            }}
            className="item"
          >
            <Icon name="angle double left" />
          </a>
        ) : (
          ''
        )}
        {focusedModel ? (
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              const selObj = handleActiv();
              activateModel(...selObj);
            }}
            className="item"
          >
            <Icon name="target" />
          </a>
        ) : (
          ''
        )}
        {activatedModel || focusedModel ? (
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              unselectAll(props.models[activeModel].obj);
            }}
            className="item"
          >
            <Icon name="expand" />
          </a>
        ) : (
          ''
        )}
        {activatedModel ? (
          <>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                handelCamNav('left');
              }}
              className="item"
            >
              <Icon name="caret left" />
            </a>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                handelCamNav('up');
              }}
              class="item"
            >
              <Icon name="caret up" />
            </a>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                handelCamNav('down');
              }}
              className="item"
            >
              <Icon name="caret down" />
            </a>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                handelCamNav('right');
              }}
              className="item"
            >
              <Icon name="caret right" />
            </a>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                handelCamNav('in');
              }}
              className="item"
            >
              <Icon name="plus" />
            </a>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                handelCamNav('out');
              }}
              className="item"
            >
              <Icon name="minus" />
            </a>
          </>
        ) : (
          ''
        )}
        {!activatedModel ? (
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              const selObj = handleNextFocused();
              function next() {
                if (activeModel !== false) {
                  props.models[activeModel].obj.children.map(
                    (element, index) => {
                      element.material = bakTextures[index];
                      return true;
                    },
                  );
                }
                const temp = selObj[0].children.map(element => {
                  return element.material;
                });

                setBakTextures(temp);
                focusObj(...selObj);
              }
              next();
            }}
            className="item"
          >
            <Icon name="angle double right" />
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
