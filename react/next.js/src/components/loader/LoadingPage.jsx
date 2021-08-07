import React, {useContext} from 'react';
import {Loader, Transition} from 'semantic-ui-react';
import ReponsiveContext from '@/context/responsive-context';

export default function LoadingPage() {
  if (!process.browser) {
    console.debug('Loader SERVER');
  }

  if (process.browser) {
    console.debug('Loader CLIENT');
  }

  const responsiveContext = useContext(ReponsiveContext);

  return (
    <div className="page-loader-con">
      <Transition id="spinner" animation="pulse" duration="500">
        <Loader active size="massive">
          {window.location.pathname === '/about-me/' ||
          window.location.pathname === '/about-me'
            ? [
                <br />,
                <br />,
                <small>this page contains 3D content ~3mb</small>,
              ]
            : ''}
        </Loader>
      </Transition>
      <div className="page-loader"></div>
    </div>
  );
}
