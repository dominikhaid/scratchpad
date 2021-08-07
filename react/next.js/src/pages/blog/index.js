import React, {useContext, useState, useEffect} from 'react';
import {Segment, Container} from 'semantic-ui-react';
import Head from 'next/head';
import Menu from '@/components/blog/menu/Menu';
import MobileMenu from '@/components/blog/menu/MobileMenu';
import RenderPost from '@/components/blog/RenderPost';
import InitPosts from '@/components/blog/InitPosts';
import PostContext from '@/context/post-context';

import {ApolloProvider} from '@apollo/react-hooks';
import {gqlReactClient} from '@/hooks/GraphQlCon';

export default function Blog(props) {
  const postContext = useContext(PostContext);
  const [posts, setPosts] = useState(postContext.postItems);

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
  if (process.browser) console.log('MENU');

  //RENDER POST AFTER INIT DATA LOAD
  return (
    <>
      <ApolloProvider client={gqlReactClient()}>
        <InitPosts postContext={postContext} setPosts={setPosts} />
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
            <RenderPost post={postContext.postItems[0]} />
          </Segment>
        </Container>
      </ApolloProvider>
    </>
  );
}
