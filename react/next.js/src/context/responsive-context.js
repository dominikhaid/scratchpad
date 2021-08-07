import React from 'react';

const ResponsiveContext = React.createContext({
  headerHeight: 0,
  navHeight: 0,
  subnavHeight: 0,
  footerHeight: 0,
  mainHeight: 0,
  window: [null, null],
  mobileBreak: [1115, 720],
  phoneBreak: [1024, 899],
  portrait: false,
  viewMode: 'desktop',
  setInfo(window) {
    this.window[0] = window.innerWidth;
    this.window[1] = window.innerHeight;

    if (window.location.hostname !== 'localhost')
      console.debug = function () {};
    if (this.window[0] < this.window[1]) this.portrait = true;
    if (!this.portrait) this.mobileBreak[1] = 650;
    if (
      this.window[0] < this.mobileBreak[0] ||
      this.window[1] < this.mobileBreak[1]
    )
      this.viewMode = 'mobile';
    if (
      (this.viewMode === 'mobile' && this.window[0] >= this.phoneBreak[0]) ||
      (this.viewMode === 'mobile' && this.window[1] >= this.phoneBreak[1])
    )
      this.viewMode = 'tablet';
  },
});
export {ResponsiveContext as default};
