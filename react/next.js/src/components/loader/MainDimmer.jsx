import React from 'react';
import {Loader, Dimmer} from 'semantic-ui-react';

export default function MainDimmer(props) {
  return (
    <Dimmer
      style={{
        position: 'fixed',
        height: '100%',
        width: '100%',
        maxWidth: 'unset!important',
        margin: '0px',
      }}
      className={props.state ? 'active' : ''}
    >
      <Loader
        style={{
          color: 'white',
        }}
      >
        {props.msg}
      </Loader>
    </Dimmer>
  );
}
