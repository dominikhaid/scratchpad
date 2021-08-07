import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const myLoader = ({src, width, quality}) => {
  if (/^http./.test(src)) return `${src}`;
  let url = `${process.env.NEXT_PUBLIC_HOST}/${src.replace(/^\//, '')}`;

  //NOTE SERVER OPTIMIZED IMAGES IN PRDUCTION MODE
  if (process.env.NODE_ENV === 'production')
    url = url.replace(/(.jpg)$|(.png)$/, `_${width}_${quality || 75}$1`);
  return url;
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
export default function DefaultImage({
  id,
  className,
  width,
  height,
  style,
  alt,
  src,
  svg,
  layout,
  cache,
}) {
  DefaultImage.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    alt: PropTypes.string,
    src: PropTypes.string,
    layout: PropTypes.string,
    svg: PropTypes.object,
    style: PropTypes.object,
    cache: PropTypes.bool,
  };

  // if (process.env.STORYBOOK && process.env.STORYBOOK === 'true')
  //   return (
  //     <img width={width} height={height} style={style} alt={alt} src={src} />
  //   );

  if (typeof svg === 'object') return svg;

  if (/^data:image/.test(src))
    return (
      <img
        id={id}
        className={className}
        style={style}
        width={width}
        height={height}
        alt={alt}
        src={src}
      />
    );

  if (cache === false)
    return (
      <img
        id={id}
        className={className}
        style={style}
        width={width}
        height={height}
        alt={alt}
        src={`${
          /^http/.test(src) ? '' : process.env.NEXT_PUBLIC_HOST + '/'
        }${src.replace(/^\//, '')}`}
      />
    );

  return (
    <>
      <Image
        id={id}
        className={className}
        style={style}
        width={width}
        loader={myLoader}
        layout={layout ? layout : 'fixed'}
        height={height}
        alt={alt}
        src={`${src}`}
      />
    </>
  );
}
