import React from 'react';
import PropTypes from 'prop-types';

function TextDivider({title, icon, className, style}) {
  TextDivider.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    icon: PropTypes.object,
  };

  return (
    <p
      style={style}
      className={
        className
          ? className + ' relative font-bold divider'
          : 'relative font-bold divider flex flex-row'
      }
    >
      <style jsx>{`
        .divider {
          display: flex;
          margin: 16px 0;
          white-space: nowrap;
          text-align: center;
          border-top: 0;
          border-top-color: currentcolor;
          border-top-color: rgba(0, 0, 0, 0.06);
        }
        .divider:after {
          position: absolute;
          top: 50%;
          width: 50%;
          right: 0%;
          border-top: 1px solid transparent;
          border-top-color: transparent;
          border-top-color: inherit;
          border-bottom: 0;
          transform: translateY(50%);
          content: '';
        }

        .divider:before {
          position: absolute;
          top: 50%;
          width: 50%;
          left: 0%;
          border-top: 1px solid transparent;
          border-top-color: transparent;
          border-top-color: inherit;
          border-bottom: 0;
          transform: translateY(50%);
          content: '';
        }
      `}</style>
      {icon && <span className="m-xs">{icon}</span>}
      <span className="mx-auto">{title}</span>
    </p>
  );
}

export default TextDivider;
