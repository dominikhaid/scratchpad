import DefaultFooter from 'components/Layout/DefaultFooter';
import DefaultTopBar from 'components/Layout/DefaultTopBar';
import DefaultHeader from 'components/Layout/DefaultHeader';
import {AppContext, AppProvider} from 'context/AppProvider';
import PropTypes from 'prop-types';
import 'public/css/global.css';
import React from 'react';

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.debug('METRIC', metric);
  }
}

/**
 * App Root
 * @param {React Component} Component main component to render
 * @param {Object} pageProps pageProps from getStatic methods
 * @returns
 */
export default function MyApp({Component, pageProps}) {
  MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
  };

  // const {data, error} = get_user_from_token();

  // function serverFun() {
  //   // NOTE ADD THINGS TO PAGE PROP
  //    console.debug('App SERVER', pageProps);
  // }

  // if (!process.browser) {
  //   serverFun();
  // }

  // if (
  //   process.browser &&
  //   window.location.pathname === '/app/demo-shop/tailwind'
  // ) {
  //   return (
  //     <>
  //       <Component />
  //     </>
  //   );
  // }

  if (
    (process.browser && window.location.pathname === '/app/demo-shop') ||
    (process.browser && window.location.pathname === '/')
  ) {
    document.querySelector('body').classList = 'home';
  } else if (process.browser && /\/\d/.test(window.location.pathname)) {
    document.querySelector('body').classList = window.location.pathname.replace(
      /.*\//,
      'error-',
    );
  } else if (process.browser) {
    document.querySelector('body').classList = window.location.pathname.replace(
      /.*\//,
      '',
    );
  }

  return (
    <AppProvider>
      <AppContext.Consumer>
        {appState => {
          //if (data && !data.error) appState.user = data;

          return (
            <div className="w-100 max-w-full layout grid-full">
              <DefaultHeader {...appState} />
              <DefaultTopBar {...appState} />
              <main className="w-100 max-w-full border-2 border-gray-lightest pt-6xl pb-6xl">
                <Component {...appState} />
              </main>
              <DefaultFooter {...appState} />
            </div>
          );
        }}
      </AppContext.Consumer>
    </AppProvider>
  );
}
