import React, {useState, useEffect} from 'react';
import UserMenu from './UserMenu';
import {Sidebar, Menu, Icon, Button} from 'semantic-ui-react';
import Link from 'next/link';

export default function Navbar(props) {
  const [visible, setVisible] = useState(false);
  const [activeItem, setActiveItem] = useState('/print-und-screendesign/');

  if (!process.browser) return <></>;

  if (process.browser) {
    if (visible) {
      document.querySelector('#__next') &&
        document.querySelector('#__next').classList.add('dimmedRoot');
    } else {
      document.querySelector('#__next') &&
        document.querySelector('#__next').classList.remove('dimmedRoot');
    }
  }

  const toRelPath = (path, server) => {
    let replServer = new RegExp(server, 'g');
    path = path.replace(replServer, '');
    path = path.replace(/^:\d\d\d\d/, '');
    return path.replace(/\/$/, '');
  };

  const NavItemsDesk = ({items}) => {
    return items.map(element => {
      let slug = toRelPath(element.url, process.env.NEXT_PUBLIC_IMGPATH);
      if (slug === '' || slug === '/') slug = '/print-und-screendesign/';
      let itemClass = slug.replace(/\//gm, '');
      return (
        <Link
          className={
            activeItem === slug
              ? `active main-menue-item flex-item-1 ${itemClass}`
              : `main-menue-item flex-item-1 ${itemClass}`
          }
          key={element.menuItemId}
          id={element.menuItemId}
          name={slug}
          onClick={e => {
            setActiveItem(e.target.getAttribute('href'));
            setVisible(false);
          }}
          href={slug}
        >
          <a
            className={
              activeItem === slug
                ? `active main-menue-item flex-item-1 ${itemClass}`
                : `main-menue-item flex-item-1 ${itemClass}`
            }
            key={element.menuItemId}
            id={element.menuItemId}
            name={slug}
            onClick={e => {
              setActiveItem(e.target.getAttribute('href'));
              setVisible(false);
            }}
          >
            {element.label}
          </a>
        </Link>
      );
    });
  };

  const NavItemsMobile = ({items}) => {
    return items.map(element => {
      let slug = toRelPath(element.url, process.env.NEXT_PUBLIC_IMGPATH);
      if (slug === '' || slug === '/') slug = '/print-und-screendesign/';
      let itemClass = slug.replace(/\//gm, '');

      if (props.userAuth.userData.uid !== false && slug === '/login/')
        return <></>;
      return (
        <Link
          className={
            activeItem === slug
              ? `active main-menue-item flex-item-1 ${itemClass}`
              : `main-menue-item flex-item-1 ${itemClass}`
          }
          key={element.menuItemId}
          id={element.menuItemId}
          name={slug}
          onClick={e => {
            setActiveItem(e.target.getAttribute('href'));
            setVisible(false);
          }}
          href={slug}
        >
          <a
            className={
              activeItem === slug
                ? `active main-menue-item flex-item-1 ${itemClass}`
                : `main-menue-item flex-item-1 ${itemClass}`
            }
            key={element.menuItemId}
            id={element.menuItemId}
            name={slug}
            onClick={e => {
              setActiveItem(e.target.getAttribute('href'));
              setVisible(false);
            }}
          >
            {element.label}
          </a>
        </Link>
      );
    });
  };

  const NavDesk = ({left, right}) => {
    return (
      <nav
        id="main-menue"
        className="material-grid material-grid__col--medium--12"
      >
        <div id="navCon" className="flex-con">
          <div className="flex-item-1 flex-con flex-start">
            <NavItemsDesk items={left} />
          </div>
          <div className="flex-item-1 flex-con flex-end">
            <NavItemsDesk items={right} />
          </div>
        </div>
      </nav>
    );
  };

  const NavMobile = ({user, left, right}) => {
    return (
      <nav
        id="mobile-menu"
        className="material-grid material-grid__col--medium--12"
      >
        <Button
          className={visible ? 'active' : ''}
          id="mobile-toggle"
          onClick={() => setVisible(!visible)}
        >
          <Icon className={visible ? 'close icon' : 'align justify icon'} />
        </Button>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <UserMenu userAuth={user} history={window.location} />

          <NavItemsMobile items={left} />
          <NavItemsMobile items={right} />
        </Sidebar>
      </nav>
    );
  };

  if (props.responsiveContext.viewMode === 'desktop')
    return (
      <NavDesk
        left={props.menus.menus[0].items}
        right={props.menus.menus[1].items}
      />
    );
  if (props.responsiveContext.viewMode !== 'desktop')
    return (
      <NavMobile
        left={props.menus.menus[0].items}
        right={props.menus.menus[1].items}
        user={props.userAuth}
      />
    );
}
