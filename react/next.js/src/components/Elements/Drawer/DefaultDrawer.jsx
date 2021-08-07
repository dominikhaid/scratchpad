import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';
import PropTypes from 'prop-types';
import CloseIcon from 'public/icons/phosphor-icons/assets/duotone/x-duotone.svg';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

/**
 *@desc NOTE Default Drawer / Sidebar
 *@visible {Boolen} component visible true /false
 *@children {Function} children to render inside the drawer
 */
export default function DefaultDrawer({
  className,
  style,
  dimmable,
  children,
  visible,
  onClose,
}) {
  DefaultDrawer.propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.object,
    onClose: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    dimmable: PropTypes.bool,
  };

  useEffect(() => {
    if (!visible) return;
    const dimmer = document.querySelector('.dimmer');
    const clickToClose = dimmer => {
      dimmer.addEventListener('click', e => {
        onClose();
      });
    };

    if (dimmer) clickToClose(dimmer);
    return () => {
      if (dimmer) dimmer.removeEventListener('click', clickToClose);
    };
  }, [visible]);

  if (!visible || !process.browser) return <></>;
  if (dimmable) className += ' dimmed';
  let drawerContainer;
  if (!document.getElementById('drawer-root')) {
    drawerContainer = document.createElement('DIV');
    drawerContainer.setAttribute('id', 'drawer-root');
  } else {
    drawerContainer = document.getElementById('drawer-root');
  }

  let container = document.querySelector('body');
  container.appendChild(drawerContainer);

  const CloseButton = ({onClose}) => {
    CloseButton.propTypes = {
      onClose: PropTypes.func,
    };
    return (
      <DefaultButton
        aria={`close menu`}
        id="drawer-close"
        onClick={e => {
          onClose();
        }}
        className="absolute border-none p-xs"
        style={{width: '40px', height: '40px', top: '20px', right: '20px'}}
        icon={<CloseIcon className="fill-current text-secondary" />}
        type="icon"
      />
    );
  };

  const drawer = () => {
    return (
      <>
        <style jsx>{`
          .app-drawer.dimmed + .dimmer {
            width: 100vw;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 40;
          }
          .app-drawer {
            min-width: 400px;
            max-width: 400px;
          }

          @media (max-width: 765px) {
            .app-drawer {
              min-width: 100%;
              max-width: 100%;
            }
          }
        `}</style>
        <aside
          style={style}
          className={
            'animate-drawer overflow-x-hidden overflow-y-scroll absolute z-50 bg-white h-100 sm:p-lg md:p-lg lg:p-2xl xl:p-4xl app-drawer app-drawer ' +
            className
          }
        >
          <CloseButton onClose={onClose} />
          {children}
        </aside>
        <div className="dimmer"></div>
      </>
    );
  };

  return ReactDOM.createPortal(drawer(), drawerContainer);
}
