import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

//TODO FILTER SHOULD RUN CALLBACK ONLY FOR THE LAST UPDATE
export default function InputFilter({formItem, input, aria, className, style}) {
  InputFilter.propTypes = {
    input: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.string,
    formItem: PropTypes.object,
    aria: PropTypes.string,
  };

  if (!formItem) formItem = {name: uuid()};

  const InputTypeCheck = ({formItem, input, aria}) => {
    InputTypeCheck.propTypes = {
      formItem: PropTypes.object,
      input: PropTypes.object,
    };

    if (!input.type || input.type !== 'checkbox') return <></>;
    return (
      <input
        aria-label={aria}
        aria-required="false"
        checked={input.checked(input.label)}
        onChange={e =>
          input.onChange(input.label, input.group, input.checked(input.label))
        }
        id={formItem.name}
        className={
          input.type === 'checkbox'
            ? 'flex-none relative display-none'
            : 'flex-auto'
        }
        type={input.type}
        placeholder={input.placeholder}
      />
    );
  };

  const InputTypeValue = ({formItem, input, aria}) => {
    InputTypeValue.propTypes = {
      formItem: PropTypes.object,
      unit: PropTypes.string,
      input: PropTypes.object,
    };

    if (!input.type || !input.value) return <></>;
    return (
      <input
        aria-label={aria}
        aria-required="false"
        id={formItem.name}
        className={'flex-1 w-75'}
        onChange={e => {
          if (Number.isNaN(Number(e.target.value))) {
            e.target.value = input.value;
            return false;
          }
          input.onChange(Number(e.target.value), input.group);
        }}
        style={{minWidth: '200px'}}
        defaultValue={input.value ? input.value : false}
        type={input.type}
        placeholder={input.placeholder}
      />
    );
  };

  const InputTypeRange = ({formItem, input, aria}) => {
    InputTypeValue.propTypes = {
      formItem: PropTypes.object,
      unit: PropTypes.string,
      input: PropTypes.object,
    };

    if (!input.type || !input.value) return <></>;
    return (
      <input
        aria-label={aria}
        aria-required="false"
        id={formItem.name}
        className={'flex-1 w-75'}
        onTouchEnd={e => {
          if (Number.isNaN(Number(e.target.value))) {
            e.target.value = input.value;
            return false;
          }
          input.onChange(Number(e.target.value), input.group);
        }}
        onMouseUp={e => {
          if (Number.isNaN(Number(e.target.value))) {
            e.target.value = input.value;
            return false;
          }
          input.onChange(Number(e.target.value), input.group);
        }}
        onChange={e => {
          if (Number.isNaN(Number(e.target.value))) {
            e.target.value = input.value;
            return false;
          }
          let rangeLabel = e.target.parentElement.querySelector('.range-val');
          if (rangeLabel)
            rangeLabel.textContent = input.unit
              ? e.target.value + input.unit
              : e.target.value;
        }}
        step="1"
        min={input.min}
        max={input.max}
        style={{minWidth: '200px'}}
        defaultValue={input.value ? input.value : false}
        type={input.type}
        placeholder={input.placeholder}
      />
    );
  };

  const InputPrefix = ({prefix}) => {
    InputPrefix.propTypes = {
      prefix: PropTypes.object,
    };

    if (!prefix) return <></>;
    return (
      <span className="flex flex-col content-center justify-center text-sm pt-sm text-primary">
        {prefix}
      </span>
    );
  };

  const InputLabel = ({formItem, label}) => {
    InputLabel.propTypes = {
      formItem: PropTypes.objet,
      label: PropTypes.string,
    };

    if (!label) return <></>;
    return (
      <label
        className="text-sm pr-none"
        htmlFor={formItem.name}
        style={{flex: '0 0 max-content'}}
      >
        {input.label}
      </label>
    );
  };

  return (
    <>
      <style jsx>{`
        fieldset {
          justify-content: center !important;
        }
      `}</style>
      <fieldset
        style={style}
        className={
          className
            ? className + ' flex flex-wrap flex-row justify-start '
            : 'flex flex-wrap flex-row justify-start'
        }
      >
        <InputLabel formItem={formItem} label={input.label} />
        <InputPrefix prefix={input.prefix} />
        {input.type === 'checkbox' && (
          <InputTypeCheck input={input} aria={aria} formItem={formItem} />
        )}
        {input.type === 'text' && (
          <InputTypeValue input={input} aria={aria} formItem={formItem} />
        )}
        {input.type === 'range' && (
          <InputTypeRange input={input} aria={aria} formItem={formItem} />
        )}
        {input.type === 'range' && (
          <small className="range-val font-bold mt-0 w-100 text-center">
            {input.unit ? input.value + input.unit : input.value}
          </small>
        )}
      </fieldset>
    </>
  );
}
