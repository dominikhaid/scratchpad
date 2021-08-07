import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @style {Object}  style additional inline style
 * @title {String}  title displayed text
 */
export default function DrawerHeadline({style, title, className}) {
  DrawerHeadline.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    className: PropTypes.string,
  };

  return (
    <h2
      className={`text-4xl font-bold text-primary mt-4xl mb-2xl ` + className}
      style={style}
    >
      {title}
    </h2>
  );
}
