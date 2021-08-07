import React, {useState} from 'react';
import PropTypes from 'prop-types';
import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';

function DropDownButton({
  active,
  setActive,
  type,
  icon,
  title,
  style,
  className,
  layout,
  children,
}) {
  DropDownButton.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    setActive: PropTypes.func,
    children: PropTypes.array,
    style: PropTypes.object,
    layout: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.object,
    className: PropTypes.string,
  };

  //  const [active, setActive] = useState(false);

  if (type === 'ghost') className += ' btn-ghost';
  if (type === 'submit') className += ' btn-primary';
  if (type === 'secondary') className += ' btn-secondary';
  if (type === 'primary') className += ' btn-primary';
  if (type === 'outlined') className += ' btn-outlined';
  if (icon) className = className ? className + ' btn-icon' : 'btn-icon';
  if (icon && /absolute/.test(icon.props.className))
    className = className
      ? className + ' btn-icon svg-absolute'
      : 'btn-icon svg-absolute';
  return (
    <div>
      <button
        onClick={e => setActive(!active)}
        style={style}
        className={className + ''}
      >
        {icon}
        {title}
      </button>
      {active && (
        <div
          style={{marginTop: '1rem', left: '0', maxWidth: '600px'}}
          className={
            layout === 'grid'
              ? 'btn-drop-down relative z-20 bg-white rounded-lg shadow-container p-xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'
              : 'btn-drop-dow relative z-20 bg-white rounded-lg shadow-container p-xl'
          }
        >
          {children}
          <div className="place-items-end place-content-center spaced">
            <DefaultButton
              aria="close menu"
              title="close"
              type="primary"
              className="small mt-lg"
              onClick={e => setActive(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDownButton;
