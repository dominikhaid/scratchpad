import {List, Image, Header} from 'semantic-ui-react';
import {normalizeHTMLtoText} from '@/hooks/HeFunctions';
import {dateStd} from '@/hooks/Date';
import SwitchPage from '@/components/blog/menu/SwitchPage';
import React, {useState} from 'react';
import {useRouter} from 'next/router';

export default function PostList({activePage, postContext, responsiveContext}) {
  if (!activePage || postContext.visibleArray[activePage].length < 1)
    return <></>;

  const router = useRouter();

  let postInd = postContext.visibleArray[activePage].findIndex(e => {
    return e.slug === window.location.pathname.replace(/\/blog\//g, '');
  });

  const [activeItem, setActiveItem] = useState(
    postContext.visibleArray[activePage][
      postInd && postInd !== -1 ? postInd : 0
    ],
  );

  const FirstItem = ({activeItem, hidden}) => {
    if (!activeItem || hidden) return <></>;

    return (
      <List.Item
        name={activeItem.slug}
        className={'activePostThumb'}
        key={activeItem.postId}
      >
        <ThumbImg element={activeItem} />
      </List.Item>
    );
  };

  const MenuItemDescription = ({element, index}) => {
    return (
      <div className="menuItemDesc" name={element.slug}>
        <a
          name={element.slug}
          href={'/blog/' + element.slug}
          className={'ui black right corner label'}
          onClick={e => {
            e.preventDefault();
          }}
        >
          <i
            name={element.slug}
            aria-hidden="true"
            className={
              element.terms.nodes[0].slug === 'print-design'
                ? 'tint icon'
                : element.terms.nodes[0].slug === 'screen-design'
                ? 'code icon'
                : 'list icon'
            }
          ></i>
        </a>
        <Header
          name={element.slug}
          className="menuItemTitle"
          as="h3"
          title={normalizeHTMLtoText(element.title)}
        >
          <small
            aria-hidden="true"
            className={
              Date.parse(element.dateGmt) - Date.now() > -630000000
                ? 'newPost'
                : index < 3 && activePage === 1
                ? 'newPost'
                : 'display-none'
            }
          >
            <b>NEU</b>
          </small>
          {normalizeHTMLtoText(element.title)}
          <br />
          <span name={element.slug}>{dateStd(element.dateGmt)}</span>
        </Header>
        <a
          href={'/' + element.slug}
          name={element.slug}
          className="menuItemExcerpt"
        >
          {normalizeHTMLtoText(element.excerpt)}
        </a>
      </div>
    );
  };

  const MarkedItem = ({element}) => {
    if (!element || !element.marked) return <></>;
    return (
      <div name={element.slug} class="marked flex-con flex-center">
        <i name={element.slug} class="check icon flex-item-1"></i>
      </div>
    );
  };

  const ThumbImg = ({element}) => {
    return (
      <Image
        name={element.slug}
        alt={
          element.featuredImage &&
          element.featuredImage.node.altText &&
          normalizeHTMLtoText(element.featuredImage.node.altText)
        }
        title={
          element.featuredImage &&
          element.featuredImage.title &&
          normalizeHTMLtoText(element.featuredImage.node.title)
        }
        width={'100%'}
        height="auto"
        src={
          element.featuredImage && element.featuredImage.node.mediaItemUrl
            ? element.featuredImage.node.mediaItemUrl.replace(
                normalizeHTMLtoText(element.featuredImage.node.title),
                normalizeHTMLtoText(element.featuredImage.node.title) +
                  '-305x175',
              )
            : element.terms.nodes[0].slug
            ? '/images/thumbs/posts/' + element.terms.nodes[0].slug + '.jpg'
            : '/images/thumbs/posts/default.jpg'
        }
      />
    );
  };

  const ItemList = ({postContext}) => {
    return postContext.visibleArray[activePage].map((element, index) => {
      return (
        <List.Item name={element.slug} key={element.postId}>
          <div
            onClick={e => {
              SwitchPage(e, postContext.postItems, router);
              setActiveItem(
                postContext.postItems[
                  postContext.visibleArray[activePage].findIndex(el => {
                    return (
                      el.slug ===
                      e.target.getAttribute('name').replace(/^\//g, '')
                    );
                  })
                ],
              );
            }}
            className={
              element.slug ===
              window.location.pathname.replace(/\/blog\//gm, '')
                ? 'menuItem flex-item-1 activePost'
                : 'menuItem flex-item-1'
            }
            name={element.slug}
            term={element.terms.nodes[0].slug}
          >
            <ThumbImg element={element} />
            <MarkedItem element={element} index={index} />
            <MenuItemDescription element={element} />
          </div>
        </List.Item>
      );
    });
  };

  console.log(postContext);
  return (
    <>
      <FirstItem
        hidden={responsiveContext.viewMode !== 'desktop'}
        activeItem={activeItem}
      />
      <ItemList postContext={postContext} />
    </>
  );
}
