import React, {useState} from 'react';
import {Icon, Menu, Header} from 'semantic-ui-react';
import SysMsg from '../msg/SysMsg';
import {useRouter} from 'next/router';

export default function UserMenu(props) {
  if (!props.userAuth.uid) return <></>;

  const router = useRouter();

  const [profilPicture] = useState(
    props.userAuth.userData.photoURL
      ? props.userAuth.userData.photoURL
      : '/images/avatar/user.svg',
  );
  const [userMenu, setUserMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(window.location.pathname);

  const handleSignOut = () => {
    async function run() {
      const check = await props.userAuth.signOutUser();
      check === true ? router.push('/login') : console.debug(check);
    }
    run();
  };

  const handleRedirect = path => {
    router.push(path);
    return true;
  };

  return (
    <>
      <SysMsg userAuth={props.userAuth} />
      <img
        alt="userImg"
        id="navUserPhoto"
        src={profilPicture}
        onClick={e => {
          e.preventDefault();
          setUserMenu(userMenu ? false : true);
        }}
      />
      <div id="warpperUserPhoto" className="flex-con flex-center">
        {userMenu ? (
          <Menu compact icon="labeled" id="userMenu" className="flex-con">
            <Header as="h4" id="userMenuHeader" className="flex-item-4">
              {props.userAuth.userData.displayName
                ? props.userAuth.userData.displayName
                : 'Guest'}
            </Header>
            <Menu.Item
              className="flex-item-1"
              name="profile"
              active={activeItem === '/dashboard/profile'}
              onClick={e => {
                e.preventDefault();
                if (e.target) {
                  setActiveItem('/dashboard/profile');
                  handleRedirect('/dashboard/profile');
                }
              }}
            >
              <Icon name="user" />
              Profil
            </Menu.Item>
            <Menu.Item
              className="flex-item-1"
              name="dashboard"
              active={activeItem === '/dashboard'}
              onClick={e => {
                e.preventDefault();
                if (e.target) {
                  setActiveItem('/dashboard');
                  handleRedirect('/dashboard');
                }
              }}
            >
              <Icon name="setting" />
              Dashboard
            </Menu.Item>

            <Menu.Item
              className="flex-item-1"
              name="logout"
              active={activeItem === 'logout'}
              onClick={e => {
                e.preventDefault();
                handleSignOut();
              }}
            >
              <Icon name="sign out" />
              Logout
            </Menu.Item>
          </Menu>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
