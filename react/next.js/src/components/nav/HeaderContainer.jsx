import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Subnav from './Subnav';

// import LoadingPage from '@/components/LoadingPage'

export default function HeaderContainer(props) {
  return props.menuContext.menuItems ? (
    <React.Fragment>
      <Header responsiveContext={props.responsiveContext} />
      <Navbar
        responsiveContext={props.responsiveContext}
        menus={props.menuContext.menuItems}
        userAuth={props.userAuth}
      />
      <Subnav className="material-grid__col--medium--12 material-grid__height--small--1" />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Header responsiveContext={props.responsiveContext} />
      <Subnav className="material-grid__col--medium--12 material-grid__height--small--1" />
    </React.Fragment>
  );
}
