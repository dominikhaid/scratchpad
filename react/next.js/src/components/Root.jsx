import React from 'react';
import dynamic from 'next/dynamic';

const LoaderNoSSR = dynamic(() => import('@/components/loader/LoadingPage'), {
  ssr: false,
});

import HeaderContainer from '@/components/nav/HeaderContainer';
import FooterContainer from '@/components/nav/FooterContainer';
import Error from '../pages/505';

export default function Root({
  Component,
  menuContext,
  pageContext,
  responsiveContext,
  userAuth,
}) {
  if (!process.browser) {
    console.debug('App / Data SERVER');
  }

  const RenderPages = () => {
    return (
      <React.Fragment>
        <HeaderContainer
          responsiveContext={responsiveContext}
          userAuth={userAuth}
          menuContext={menuContext}
          pageContext={pageContext}
        />

        <div id="scrollBox" className="dimmable">
          <div
            id="scrollUp"
            className="display-none"
            onClick={e => {
              e.preventDefault();
              document.querySelector('main').scrollTo(0, 0);
            }}
          >
            <i className="angle double up small icon"></i>
          </div>
          <div
            id="scrollDown"
            className="display-none"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector('main')
                .scrollTo(0, document.querySelector('main').scrollTopMax);
            }}
          >
            <i className="angle double down small icon"></i>
          </div>
        </div>
        <main id="main" className="scrollBoxY dimmable">
          <Component
            pageContext={pageContext}
            userAuth={userAuth}
            responsiveContext={responsiveContext}
          />
        </main>
        <FooterContainer
          responsiveContext={responsiveContext}
          menuContext={menuContext}
          pageContext={pageContext}
        />
      </React.Fragment>
    );
  };

  if (pageContext.pageItems && menuContext.menuItems) return RenderPages();
  //return database error
}
