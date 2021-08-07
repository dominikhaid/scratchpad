import React from 'react';

const PostContext = React.createContext({
  postItems: false,
  pages: 1,
  visibleArray: false,
  hasNextPage: true,
  visibleItems: 5,
  gql: false,
  pagination: 1,
  setPostContext(a, b, c, d, f) {
    // console.debug('POST', a, 'PAGES', b, 'VISARRAY', c, 'HASNEXTPAGES', d);
    if (a) this.postItems = a;
    if (b) this.pages = b;
    if (c) this.visibleArray = c;
    this.hasNextPage = d;
    if (f) this.gql = f;
    return {state: true, items: this.postItems};
  },
  getPostItems() {
    return {state: true, items: this.postItems};
  },
});
export {PostContext as default};
