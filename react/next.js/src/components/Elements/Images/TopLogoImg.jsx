import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const myLoader = ({src, width, quality}) => {
  if (/^http./.test(src)) return `${src}`;
  return `${process.env.NEXT_PUBLIC_HOST}/${src.replace(
    /^\//,
    '',
  )}?w=${width}&q=${quality || 75}`;
};

/**
 *
 * @width {String} width for Next Image
 * @height {String} height for Next Image
 * @style {Object} style additional inline style
 * @alt {String} alt text
 * @src {String} img src
 * @layout {String} image fill mode
 */
export default function TopLogoImg({
  id,
  className,
  width,
  height,
  style,
  alt,
  src,
  layout,
}) {
  TopLogoImg.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
    src: PropTypes.string,
    layout: PropTypes.string,
    style: PropTypes.object,
  };

  // if (process.env.STORYBOOK && process.env.STORYBOOK === 'true')
  //   return (
  //     <img width={width} height={height} style={style} alt={alt} src={src} />
  //   );

  return (
    <aside
      id="header-logo"
      style={{height: 'min-contnet'}}
      className="flex relative items-center justify-center flex-1 m-auto sm:w-75 md:w-100 lg:w-100 xl:w-100 mb-2xl sm:min-w-75 md:min-w-100 lg:min-w-100 xl:min-w-100 xl:min-w-15 lg:min-w-15 xl:max-w-25"
    >
      <div className="relative">
        <style jsx>
          {`
            #top-logo-filter {
              filter: blur(20px) brightness(0);
              opacity: 0.7;
            }
          `}
        </style>
        <img
          id={'top-logo-filter'}
          className={className + ' absolute left-0 h-100'}
          style={style}
          width={width}
          layout={layout ? layout : 'fixed'}
          height={height}
          alt={alt}
          src={`${process.env.NEXT_PUBLIC_HOST}${src}`}
        />
        <Image
          id={'top-logo'}
          className={className}
          style={style}
          width={width}
          loader={myLoader}
          layout={layout ? layout : 'fixed'}
          height={height}
          alt={alt}
          src={`${src}`}
        />
      </div>
    </aside>
  );
}
