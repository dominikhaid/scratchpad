import React, {useState, useEffect} from 'react';

import SecundaryMobile from '@/components/nav/SecundaryMobile';
import PaginationBlog from '@/components/blog/menu/PaginationBlog';
import PostList from '@/components/blog/menu/PostList';

export default function MobileMenu({postContext, responsiveContext, setPosts}) {
  if (!postContext.postItems) return <></>;

  let activeItemPage = 1;
  const [activePage, setActivePage] = useState(activeItemPage);

  const [visibleSec, setVisibleSec] = useState(false);

  useEffect(() => {
    const loopFix = () => {
      let firstItemHeader = document.querySelector('#activeBlogMenuHeader');
      let blogHeader = document.querySelector('#blogDes');
      const fixEmptyHeader = () => {
        if (firstItemHeader.innerHTML === 'Empty')
          firstItemHeader.innerHTML = blogHeader.innerHTML;
        let excerpt = document.querySelector('.menuItemExcerpt');
        if (excerpt && excerpt.innerHTML === 'Empty')
          document.querySelector(
            '.menuItemExcerpt',
          ).innerHTML = `<b>Wir haben deinen zuletzt besuchten Post geladen. Alle neuen Posts findest du im Menü unten.</b>`;
      };
      if (firstItemHeader && blogHeader) {
        fixEmptyHeader();
      } else {
        setTimeout(() => {
          loopFix();
        }, 100);
      }
    };
    loopFix();
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <SecundaryMobile
        id={'blog-menu'}
        visible={visibleSec}
        icon={'blogger'}
        setVisible={setVisibleSec}
        renderItems={[
          <PostList
            postContext={postContext}
            activePage={activePage}
            responsiveContext={responsiveContext}
          />,
          <PaginationBlog
            activePage={activePage}
            setActivePage={setActivePage}
            postContext={postContext}
            setPosts={setPosts}
          />,
        ]}
      />
    </React.Fragment>
  );
}
