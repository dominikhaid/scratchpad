import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

/**
 * Basic site links as grid
 * @returns react component
 */
export default function DefaultVerticalLinkList() {
  DefaultVerticalLinkList.propTypes = {
    item: PropTypes.object,
  };

  const data = [
    {
      title: 'Home',
      link: '/',
    },
  ];

  return (
    <>
      <ul className="m-xl justify-items-center m-auto text-center content-center place-content-center place-items-center items-center  grid grid-flow-col auto-cols-max gap-2xl">
        {data.map(item => (
          <li className="text-white font-bold" key={item.title}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
