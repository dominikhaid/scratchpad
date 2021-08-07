import React, {useEffect} from 'react';
import DefaultMainMenu from 'components/Elements/Menu/DefaultMainMenu';
import PropTypes from 'prop-types';
import TopLogoImg from 'components/Elements/Images/TopLogoImg';

export default function DefaultHeader({user, children}) {
  DefaultHeader.propTypes = {
    user: PropTypes.object,

    children: PropTypes.func,
  };

  let width = 400,
    height = 130;

  useEffect(() => {
    return () => {};
  }, [user]);

  return (
    <>
      <header className="w-100 max-w-full relative gradient-primary shadow-inner layout">
        <nav
          id="topNav"
          className="flex flex-col w-100 lg:flex-wrap py-6xl pt-25 xl:flex-row lg:flex-row xl:flex-wrap"
        >
          <TopLogoImg
            className="flex-1"
            src={`/images/logos/print-und-screen-design.svg`}
            alt="Our brand new Bike Shop"
            layout="intrinsic"
            width={width}
            height={height}
          />
          <DefaultMainMenu className="flex justify-center flex-1 text-white mt-2xl xl:mt-none px-lg w-100 border-gray-light lg:mt-none" />
          {children}
        </nav>
      </header>
    </>
  );
}
