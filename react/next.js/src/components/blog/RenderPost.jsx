import React, {useState} from 'react';
import {Header, Segment, Tab, Container} from 'semantic-ui-react';
import {dateStd} from '@/hooks/Date';
import {praseHtmlSpecialChars, returnHTML} from '@/hooks/HeFunctions';

export default function RenderPost({post}) {
  if (!post || !post.content) return <></>;

  const [paneInd, setPaneInd] = useState(0);
  const [activePage, setActivePage] = useState(post.slug);

  if (activePage !== post.slug) {
    setPaneInd(0);
    setActivePage(post.slug);
  }

  function getStoredPost() {
    try {
      let cookieLoad = localStorage.getItem('lastViewed');
      if (cookieLoad) return JSON.parse(cookieLoad);
      return null;
    } catch (e) {
      return null;
    }
  }

  const saveStoredPost = (post, lastPub) => {
    let lastViewdStore = {};
    lastViewdStore.ind = post.postId;
    lastViewdStore.content = post.slug;
    // lastViewdStore.lastPubPost = lastPub;
    lastViewdStore.title = post.title;
    lastViewdStore.postGmt = post.dateGmt;
    lastViewdStore.visited = new Date(Date.now()).toUTCString();

    localStorage.setItem('lastViewed', JSON.stringify(lastViewdStore));
  };

  const [lastViewed] = useState(getStoredPost());

  /**
   * Content
   */

  const makeGallery = () => {
    const gallerImg = document.querySelectorAll('.blocks-gallery-item');
    // eslint-disable-next-line
    for (const iterator of gallerImg) {
      iterator.setAttribute('onClick', 'openGallery(this)');
    }
  };

  const filterMainTabs = blob => {
    if (blob === '' || !blob) return null;
    let filteredBlob = document.createElement('DIV');
    filteredBlob.innerHTML = blob;
    let mainTabArr = [];
    filteredBlob = [...filteredBlob.children];
    filteredBlob = filteredBlob.filter(e => {
      const list = [...e.classList];
      if (list.includes('main-tab')) mainTabArr.push(e);
      return !list.includes('main-tab');
    });
    return [filteredBlob, mainTabArr];
  };

  const postHeader = () => {
    return (
      <>
        <Header id="blogDes" as="h1" key={'blogTabHeader'}>
          {praseHtmlSpecialChars(post.title)}
          <span>
            <small className="pubDate">
              {post.dateGmt ? dateStd(post.dateGmt) : ''}
            </small>
            <br />
            <small className="pubCat">
              {post.terms[0] ? praseHtmlSpecialChars(post.terms[0].name) : ''}
            </small>
          </span>
          {lastViewedLabel()}
        </Header>
      </>
    );
  };

  const prasedContent = post.content ? filterMainTabs(post.content) : null;

  //LOOK 4 WP Gallery
  setTimeout(() => {
    makeGallery();
  }, 100);

  const lastViewedLabel = () => {
    let storedView = getStoredPost();
    if (storedView && storedView.content === post.slug)
      return (
        <div id="lastViewed">
          <p
            href="/"
            style={{
              left: 'calc(100% + 1rem + 1.7em)',
              top: '-38px',
            }}
            className="ui orange right ribbon label"
          >
            Last Viewed Post
          </p>
        </div>
      );
  };

  const RenderTabedPost = () => {
    const paneButtons = () => {
      return (
        <Segment
          id="panePrevNext"
          className="ui mini pagination menu flex-con flex-center"
        >
          {paneInd !== panes.length - 1 ? (
            <>
              <a
                className="item"
                content={'Next Section'}
                href={window.location.pathname}
                id="nextPane"
                onClick={e => {
                  e.preventDefault();
                  setPaneInd(paneInd + 1);
                  document.querySelector('main').scrollTo(0, 0);
                }}
              >
                {`weiter: ${panes[paneInd + 1].menuItem}`}
              </a>
            </>
          ) : (
            <>
              <a
                className="item"
                content={'Next Section'}
                href={window.location.pathname}
                id="nextPane"
                onClick={e => {
                  e.preventDefault();
                  setPaneInd(0);
                  document.querySelector('main').scrollTo(0, 0);
                }}
              >
                {`zurück: ${
                  panes[paneInd - 1 >= 0 ? paneInd - 1 : 0].menuItem
                }`}
              </a>
            </>
          )}
        </Segment>
      );
    };

    const panes = prasedContent[1].map(e => {
      return {
        menuItem: e.id,
        render: () => (
          <Tab.Pane id={e.id} attached="bottom" key={e.id}>
            <div
              dangerouslySetInnerHTML={returnHTML(e.outerHTML.toString())}
            ></div>
            {prasedContent[1].length >= 2 ? paneButtons() : ''}
          </Tab.Pane>
        ),
      };
    });

    if (!panes[paneInd]) setPaneInd(0);

    return [
      <>
        {postHeader()}
        <Container id="blogContent" className="margin" key={'blogTabContainer'}>
          <Tab
            key={'blogTabMenu'}
            activeIndex={paneInd}
            id="blogTabMenu"
            menu={{
              attached: 'top',
              secondary: true,
              pointing: true,
            }}
            menuPosition="right"
            panes={panes}
            onTabChange={(event, data) => {
              setPaneInd(data.activeIndex);
              setTimeout(() => {
                makeGallery();
              }, 100);
            }}
          />
          {prasedContent[0].length > 0
            ? prasedContent[0].map(e => {
                return (
                  <div
                    dangerouslySetInnerHTML={returnHTML(e.outerHTML.toString())}
                  ></div>
                );
              })
            : ''}
        </Container>
      </>,
      saveStoredPost(post),
    ];
  };

  const RenderNoTabPost = () => {
    return (
      <>
        {postHeader()}
        {post && post.content ? (
          <div id="blogTabMenu" className="margin" style={{minWidth: '100%'}}>
            <div className="ui pointing secondary top attached menu">
              <a href="/#" className="active item">
                Content
              </a>
            </div>
            <Container
              style={{minWidth: '100%'}}
              id="blogContent"
              className="ui bottom attached segment active tab"
              dangerouslySetInnerHTML={returnHTML(
                praseHtmlSpecialChars(post.content),
              )}
            />
          </div>
        ) : (
          ''
        )}
      </>
    );
  };

  //TAB VIEW
  if (prasedContent && prasedContent[1].length > 0) {
    return [RenderTabedPost(), saveStoredPost(post)];
  } else {
    return [RenderNoTabPost(), saveStoredPost(post)];
  }
}
