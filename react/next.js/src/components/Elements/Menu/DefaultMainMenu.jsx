import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function DefaultMainMenu({className}) {
  DefaultMainMenu.propTypes = {
    className: PropTypes.string,
  };

  const data = [
    {
      title: 'Home',
      link: '/',
    },
  ];

  if (!process.browser) return <></>;
  let pathName = '/';
  if (process.browser)
    pathName = window.location.pathname.replace(/(.*\/)?(\w*)$/, '$2');

  if (pathName === '/app/demo-shop') pathName = '/';

  return (
    <ul className={'inline-flex ' + className}>
      {data.map((item, index) => {
        let test = item.link;
        if (pathName !== '/') test = test.replace('/', '');

        return (
          <li
            className="text-2xl my-none font-bold inline-felx justify-self-start my-none mr-lg"
            key={index}
          >
            <Link href={item.link}>
              <a
                href={item.link}
                className={
                  pathName === test
                    ? pathName + ' acitve underline hover:underline'
                    : 'hover:underline'
                }
              >
                {item.title}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
