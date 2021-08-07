import React, {useContext, useState, useEffect} from 'react';
import {Segment, Container} from 'semantic-ui-react';
import Head from 'next/head';
import Menu from '@/components/blog/menu/Menu';
import MobileMenu from '@/components/blog/menu/MobileMenu';
import LoadPostBySlug from '@/components/blog/LoadPostBySlug';
import RenderPost from '@/components/blog/RenderPost';
import PostContext from '@/context/post-context';
import InitPosts from '@/components/blog/InitPosts';

import {ApolloProvider} from '@apollo/react-hooks';
import {gqlReactClient} from '@/hooks/GraphQlCon';

export default function Post(props) {
  const postContext = useContext(PostContext);

  const [posts, setPosts] = useState(postContext.posts);

  const RenderMenu = props => {
    if (!postContext.visibleArray) return <></>;

    return props.responsiveContext.viewMode === 'desktop' ? (
      <Menu {...props} />
    ) : (
      <MobileMenu {...props} />
    );
  };

  const NextMeta = () => {
    return (
      <Head>
        <title>Print & Screen-Design | Blog</title>
        <meta
          name="description"
          content="Blog über Themen aus der weiten Welt der Web-Entwicklung und zum Thema Print & Screen-Design allgemein."
        />
      </Head>
    );
  };

  let findPost;
  if (process.browser && postContext.postItems)
    findPost = postContext.postItems.findIndex(
      e => e.slug === window.location.pathname.replace(/\/blog\//gm, ''),
    );

  return (
    <>
      <ApolloProvider client={gqlReactClient()}>
        <InitPosts postContext={postContext} setPosts={setPosts} />
        <LoadPostBySlug
          postContext={postContext}
          setPosts={setPosts}
          findPost={findPost}
        />
        <NextMeta />
        <Container className="margin-top material-grid" key={'bogContainer'}>
          <RenderMenu
            key={'BlogMenue'}
            postContext={postContext}
            responsiveContext={props.responsiveContext}
            setPosts={setPosts}
          />
          <Segment
            key={'bogContentContainer'}
            id="blogWrapper"
            className="material-grid__col--medium--8 flex-start"
            style={{
              minHeight: props.responsiveContext.window[1] + 'px',
            }}
          >
            <RenderPost
              post={
                postContext.postItems &&
                postContext.postItems[findPost] &&
                findPost > -1
                  ? postContext.postItems[findPost]
                  : false
              }
            />
          </Segment>
        </Container>
      </ApolloProvider>
    </>
  );
}
