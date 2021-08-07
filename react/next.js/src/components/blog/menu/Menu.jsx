import React, {useState} from 'react';
import {Transition, List, Segment} from 'semantic-ui-react';

import PaginationBlog from '@/components/blog/menu/PaginationBlog';
import PostList from '@/components/blog/menu/PostList';

export default function Menu({postContext, responsiveContext, setPosts}) {
  if (!postContext || !postContext.postItems) return <></>;

  const [activePage, setActivePage] = useState(postContext.pagination);

  return (
    <React.Fragment>
      <Segment
        id="blog-menu"
        className="material-grid__col--medium--3 flex-start"
        style={{
          overflow: 'hidden',
          paddingTop: '100px',
          width: 'calc(100% - 25px)',
        }}
      >
        <Transition.Group
          as={List}
          duration={500}
          animation={'vertical flip'}
          size="huge"
          verticalAlign="middle"
        >
          <PostList
            postContext={postContext}
            activePage={activePage}
            responsiveContext={responsiveContext}
          />
        </Transition.Group>
        <PaginationBlog
          activePage={activePage}
          setActivePage={setActivePage}
          postContext={postContext}
          setPosts={setPosts}
        />
      </Segment>
    </React.Fragment>
  );
}
