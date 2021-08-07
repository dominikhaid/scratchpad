import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultBreadcrumb({
  style,
  className,
  user,
  card,
  updateCard,
  updateState,
  size,
}) {
  DefaultBreadcrumb.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  if (!process.browser) return <></>;

  let data =
    window.location.pathname === '/'
      ? ['home']
      : window.location.pathname.replace('/app/demo-shop', '').split('/');
  data[0] = 'home';

  return (
    <ul className="py-xl md:min-w-100 sm:min-w-100 place-content-start flex flex-1 text-primary xl:justify-start xs:w-100  xl:min-w-50 align-center lg:justify-start xl:max-w-50 lg:min-w-50 lg:max-w-50">
      {data.map(e => {
        return (
          <li
            className={`font-bold m-none styled-a pr-sm pr-nones ${
              data[data.length - 1] === e ? 'active ' : ''
            }`}
            key={e}
          >
            <Link href={e === 'home' ? '/' : `/${e}`}>
              {' / ' + e.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
