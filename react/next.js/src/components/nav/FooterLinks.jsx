import React, {useState, useEffect} from 'react';
import {List, Icon} from 'semantic-ui-react';
import Link from 'next/link';

export default function FooterLinks(props) {
  const [activeItem, setActiveItem] = useState('/print-und-screendesign/');

  useEffect(() => {
    return () => {};
    // eslint-disable-next-line
  }, [props.menuContext.menuItems]);

  const toRelPath = (path, server) => {
    let replServer = new RegExp(server, 'g');
    path = path.replace(replServer, '');
    path = path.replace(/^:\d\d\d\d/, '');
    return path.replace(/\/$/, '');
  };

  const FooterLinksDesk = ({items, visible}) => {
    if (!visible) return <></>;

    return (
      <List horizontal bulleted id={'footer-links-desktop'}>
        {items.map(element => {
          let slug = toRelPath(element.url, process.env.NEXT_PUBLIC_IMGPATH);
          if (slug === '' || slug === '/') slug = '/print-und-screendesign/';
          let itemClass = slug.replace(/\//gm, '');
          let label = element.label;
          return (
            <List.Item
              key={element.menuItemId}
              id={element.menuItemId}
              name={slug}
              className={
                activeItem === slug ? `active ${itemClass}` : `${itemClass}`
              }
            >
              <Link
                name={slug}
                onClick={e => {
                  setActiveItem(e.target.name);
                }}
                href={slug}
              >
                <a
                  name={slug}
                  onClick={e => {
                    //e.preventDefault()
                    setActiveItem(e.target.name);
                  }}
                >
                  {label}
                </a>
              </Link>
            </List.Item>
          );
        })}
      </List>
    );
  };

  const FooterLinksMobile = ({visible}) => {
    if (!visible) return <></>;

    const items = [
      {
        url: '/print-und-screendesign',
        icons: <Icon name="home" size="big" />,
      },
      {
        url: '/blog',
        icons: <Icon name="blogger" size="big" />,
      },
      {
        url: '/kontakt',
        icons: <Icon name="mail" size="big" />,
      },
      {
        url: '/login',
        icons: <Icon name="user" size="big" />,
      },
      {
        url: '/legals',
        icons: <Icon name="shield alternate" size="big" />,
      },
    ];

    return (
      <List horizontal id={'footer-links-mobile'}>
        {items.map(element => {
          let slug = toRelPath(element.url, process.env.NEXT_PUBLIC_IMGPATH);
          if (slug === '' || slug === '/') slug = '/print-und-screendesign/';
          let itemClass = slug.replace(/\//gm, '');
          let label = element.url;
          return (
            <Link
              className={
                activeItem === slug
                  ? `active main-menue-item flex-item-1 ${itemClass}`
                  : `main-menue-item flex-item-1 ${itemClass}`
              }
              name={label}
              onClick={e => {
                setActiveItem(e.target.name);
              }}
              href={itemClass}
            >
              <List.Item
                className="inverted"
                as="a"
                href={itemClass}
                target="_self"
              >
                {element.icons}
              </List.Item>
            </Link>
          );
        })}
      </List>
    );
  };

  if (!props.menuContext.menuItems.menus) return <></>;

  return (
    <div
      id={
        props.responsiveContext.viewMode === 'mobile'
          ? 'footer-links-mobile'
          : 'footer-links'
      }
      className="material-grid__col--medium--12 flex-center "
    >
      <FooterLinksDesk
        items={props.menuContext.menuItems.menus[2].items}
        visible={props.responsiveContext.window[0] > 900}
      />
      <FooterLinksMobile
        visible={
          props.responsiveContext.window[0] &&
          props.responsiveContext.window[0] < 900
        }
      />
    </div>
  );
}
