import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Elements/Images/DefaultImage';

/**
 *
 * @title {String} card headline
 * @link {String} card footer link
 * @cover {Object} card cover picture
 * @content {String} card content text
 * @style {Object} additional inline styles
 */
export default function DeafultFeatureCard({
  style,
  className,
  link,
  cover,
  title,
  content,
  alt,
}) {
  DeafultFeatureCard.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    className: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string,
    cover: PropTypes.object,
    alt: PropTypes.string,
  };

  const displaylink = link ? link.replace(/https:\/\/|http:\/\//g, '') : '';
  return (
    <div
      className={
        className
          ? className +
            ' flex flex-wrap border-2 sm:flex-row md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse border-gray-light sm:mx-none xl:mx-xl lg:mx-xl shadow-lg default-card my-4xl'
          : 'flex flex-wrap border-2 sm:flex-row md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse border-gray-light sm:mx-none xl:mx-xl lg:mx-xl bg-gray-lightest shadow-lg default-card my-4xl'
      }
      style={{
        ...style,
      }}
    >
      <div className="relative flex items-center justify-center flex-1 text-white shadow-inner gradient-secondary p-6xl w-100">
        <Image
          width={150}
          height={150}
          alt={alt}
          className="relative text-white p-6xl"
          {...cover}
        />
      </div>
      <div style={{flex: '1 1 300px'}} className="prose p-2xl">
        <h3>{title}</h3>
        <p>{content}</p>
        <a rel="noopener noreferrer" href={link} target="_blank">
          {displaylink}
        </a>
      </div>
    </div>
  );
}
