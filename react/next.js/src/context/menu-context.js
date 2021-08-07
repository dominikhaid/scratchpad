import React from 'react';
import menus from '../data/menus.js';

const MenuContext = React.createContext({
  menuItems: menus ? menus : false,
  // menuItems: MenuData.data.menus.edges[0].node.menuItems.edges,
});
export {MenuContext as default};
