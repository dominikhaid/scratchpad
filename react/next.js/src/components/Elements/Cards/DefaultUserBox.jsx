import UserOutlined from 'public/icons/phosphor-icons/assets/duotone/user-circle-duotone.svg';
import React from 'react';
import Image from 'components/Elements/Images/DefaultImage';
import PropTypes from 'prop-types';

export default function DefaultUserBox({
  content,
  title,
  src,
  size,
  link,
  style,
  className,
  alt,
}) {
  DefaultUserBox.propTypes = {
    content: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.number,
    link: PropTypes.string,
    style: PropTypes.object,
  };

  const displaylink = link ? link.replace(/https:\/\/|http:\/\//g, '') : '';

  let minWidth = '280px',
    maxWidth = '450px';

  return (
    <div
      style={{
        maxWidth: `${maxWidth}`,
        minWidth: `${minWidth}`,
      }}
      className={
        className
          ? className +
            ' flex justify-start mx-auto border-2 w-100 shadow-container border-gray my-4xl p-xl'
          : 'flex justify-start mx-auto border-2 w-100 shadow-container border-gray my-4xl p-xl'
      }
    >
      <div
        style={{
          minWidth: size,
          minHeight: size,
          maxWidth: size,
          maxHeight: size,
        }}
        className="overflow-hidden rounded-full mr-lg"
      >
        {src ? (
          <Image
            width={size}
            style={{width: size, height: size}}
            height={size}
            alt={alt}
            src={src}
          />
        ) : (
          <UserOutlined width={size} height={size} />
        )}
      </div>
      <div className="flex-auto prose">
        <h3 rel="noopener noreferrer">{title}</h3>
        <p>{content}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {displaylink}
        </a>
      </div>
    </div>
  );
}
