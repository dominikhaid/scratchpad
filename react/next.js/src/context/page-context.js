import React from 'react';
import data from '../data/pages.js';

const PageContext = React.createContext({
  pageItems: data ? data : false,

  pageData: false,
});
export {PageContext as default};
