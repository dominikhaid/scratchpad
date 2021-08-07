import React from 'react';

export default function Header(props) {
  return (
    <React.Fragment>
      <div
        id="header-toolbar-grid"
        className="material-grid material-grid__col--medium--12 material-grid__height--small--1 dimmable"
      ></div>
      <header
        id="header-main-grid"
        className="material-grid material-grid__col--medium--12 dimmable"
      >
        <div
          id="brand-left"
          className="material-grid__col--medium--9 material-grid__col--xsmall--0 flex-center"
        ></div>
        <div
          id="brand-right"
          className="material-grid__col--medium--2 material-grid__col--xsmall--3 flex-center"
        >
          <img
            id="main-logo"
            height="auto"
            width={'100%'}
            alt="Dominik Haid - Screen & Printdesign"
            src="/images/print-und-screen-design-outline.svg"
          />
        </div>
      </header>
    </React.Fragment>
  );
}
