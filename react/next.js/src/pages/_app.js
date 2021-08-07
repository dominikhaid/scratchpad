import React, {useContext} from 'react';

import '../../public/scss/material-grid.scss';
import '../../public/semantic/semantic.less';
import '../../public/less/main.less';

import Root from '@/components/Root';

import MenuContext from '@/context/menu-context';
import PageContext from '@/context/page-context';

import ReponsiveContext from '@/context/responsive-context';
import PublicUserContext from '@/context/user-context';

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.debug('METRIC', metric);
  }
}

export default function MyApp({Component, pageProps}) {
  function serverFun() {
    //ADD THINGS TO PAGE PROP
    console.debug('App SERVER', pageProps);
  }

  const menuContext = useContext(MenuContext);
  const pageContext = useContext(PageContext);
  const userAuth = useContext(PublicUserContext);
  const responsiveContext = useContext(ReponsiveContext);

  if (!process.browser) {
    // serverFun();
  } else {
    let root = document.getElementById('__next');
    let tag = window.location.pathname.split('/');
    if (tag[1] === '') tag[1] = 'print-und-screendesign';
    root &&
      tag[1] &&
      document.getElementById('__next').setAttribute('class', tag[1]);
    userAuth.checkUser();
    responsiveContext.setInfo(window);
  }

  return (
    <PageContext.Provider value={pageContext}>
      <Root
        Component={Component}
        responsiveContext={responsiveContext}
        userAuth={userAuth}
        menuContext={menuContext}
        pageContext={pageContext}
      />
    </PageContext.Provider>
  );
}
