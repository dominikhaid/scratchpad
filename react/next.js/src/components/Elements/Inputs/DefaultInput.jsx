import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import {validateField} from 'src/hooks/validateFrom';
import EyeIcon from 'public/icons/phosphor-icons/assets/duotone/eye-duotone.svg';
import AsterixIcon from 'public/icons/phosphor-icons/assets/duotone/asterisk-duotone.svg';

export default function DefaultInput({
  name,
  required,
  type,
  placeholder,
  label,
  rules,
  value,
  prefix,
  className,
  remember,
  style,
  aria,
}) {
  DefaultInput.propTypes = {
    name: PropTypes.string,
    align: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    rules: PropTypes.array,
    value: PropTypes.string,
    prefix: PropTypes.object,
    style: PropTypes.object,
    remember: PropTypes.bool,
    aria: PropTypes.string,
    className: PropTypes.string,
  };

  if (!name) name = uuid();

  const InputType = ({name, remember, required, placeholder, type}) => {
    InputType.propTypes = {
      name: PropTypes.string,
      required: PropTypes.bool,
      placeholder: PropTypes.string,
      type: PropTypes.string,
      data: PropTypes.string,
      remember: PropTypes.bool,
      aria: PropTypes.string,
      dataVal: PropTypes.string,
    };

    const inputValidation = ({target, validation}) => {
      let formError = target.parentElement.querySelector(
        '.form-validation-error',
      );

      if (formError) {
        [...formError.children].forEach(e => formError.removeChild(e));
      }

      if (!validation.msg) return false;

      if (!formError) {
        formError.classList.add('form-validation-error');
        formError = target.parentElement.createElement('SPAN');
        target.parentElement.appendChild(formError);
      }

      if (validation.type === 'password') {
        let lengthErr = document.createElement('P');
        lengthErr.setAttribute(
          'class',
          validation.msg.length.state
            ? 'text-center text-secondary w-100'
            : 'text-center text-red-dark w-100',
        );
        lengthErr.innerHTML = validation.msg.length.msg;

        let caseErr = document.createElement('P');
        caseErr.setAttribute(
          'class',
          validation.msg.case.state
            ? 'text-center text-secondary w-100'
            : 'text-center text-red-dark w-100',
        );
        caseErr.innerHTML = validation.msg.case.msg;

        let digitErr = document.createElement('P');
        digitErr.setAttribute(
          'class',
          validation.msg.digit.state
            ? 'text-center text-secondary w-100'
            : 'text-center text-red-dark w-100',
        );
        digitErr.innerHTML = validation.msg.digit.msg;

        let specialErr = document.createElement('P');
        specialErr.setAttribute(
          'class',
          validation.msg.special.state
            ? 'text-center text-secondary w-100'
            : 'text-center text-red-dark w-100',
        );
        specialErr.innerHTML = validation.msg.special.msg;

        formError.appendChild(lengthErr);
        formError.appendChild(caseErr);
        formError.appendChild(digitErr);
        formError.appendChild(specialErr);
        return true;
      }

      let fieldErr = document.createElement('P');
      fieldErr.setAttribute('class', 'text-center text-red-dark w-100');
      fieldErr.innerHTML = validation.msg;
      formError.appendChild(fieldErr);
      return true;
    };

    const handelChange = e => {
      let newVal = {value: e.target.value, type: e.target.type, rules: rules};
      newVal.value = newVal.value.replace(/^[\s\uFEFF\xA0]+/g, '');
      if (e.target.type === 'email') newVal.value = newVal.value.toLowerCase();
      let res = validateField(newVal);

      !res.state &&
        inputValidation({
          target: e.target,
          validation: {
            msg: res.msg,
            type: res.type ? res.type : 'error',
          },
        });
      res.state &&
        inputValidation({
          target: e.target,
          validation: {msg: false.msg, type: false},
        });
      e.target.value = newVal.value;
    };

    let inputCls = 'flex-auto';
    if (type === 'checkbox') inputCls += ' flex-none';
    if (type === 'password') inputCls += ' password-field';

    if (type)
      return (
        <input
          key={uuid()}
          id={name}
          aria-label={aria}
          aria-required={required}
          className={inputCls}
          onChange={e => handelChange(e)}
          defaultValue={value}
          required={required}
          type={type}
          data-value={remember ? value : ''}
          placeholder={placeholder}
        />
      );

    return (
      <input
        key={uuid()}
        aria-label={aria}
        aria-required={required}
        id={name}
        className={inputCls}
        type={type}
        data-value={remember}
        onChange={e => handelChange(e)}
        defaultValue={value}
        required={required}
        placeholder={placeholder}
      />
    );
  };

  const InputPrefix = ({prefix}) => {
    InputPrefix.propTypes = {
      prefix: PropTypes.object,
    };

    if (!prefix) return <></>;
    return (
      <>
        <style jsx>{`
          span {
            width: 30px;
            height: 30px;
            flex: 0 0 30px;
          }

          @media (max-width: 765px) {
            span {
              width: 20px;
              height: 20px;
              flex: 0 0 20px;
            }
          }
        `}</style>
        <span key={uuid()} className="inline-flex text-primary">
          {prefix}
        </span>
      </>
    );
  };

  const AdditionalRenderAfter = ({data}) => {
    AdditionalRenderAfter.propTypes = {
      data: PropTypes.string,
    };

    if (data !== 'password') return <></>;

    return (
      <span key={uuid()}>
        <style jsx>{`
          span {
            width: 30px;
            height: 30px;
            flex: 0 0 30px;
            display: flex;
            max-width: 30px;
            min-width: unset !important;
          }

          @media (max-width: 765px) {
            span {
              width: 15px;
              height: 15px;
              flex: 1 1 15px;
              max-width: 15px;
              min-width: unset !important;
            }
          }
          @media (max-width: 335px) {
            span {
              margin: 0 !important;
            }
          }
        `}</style>
        <EyeIcon
          key={uuid()}
          className="cursor-pointer postfix text-primary"
          onClick={e => {
            let pwdField =
              e.target.parentElement.tagName === 'SPAN'
                ? e.target.parentElement.previousElementSibling
                : e.target.parentElement.parentElement.previousElementSibling;

            if (pwdField.tagName === 'FIELDSET')
              pwdField = pwdField.querySelector('input');

            if (pwdField)
              pwdField.type =
                pwdField.type === 'password' ? 'text' : 'password';
          }}
        />
      </span>
    );
  };

  const AdditionalRenderBefore = ({required}) => {
    AdditionalRenderBefore.propTypes = {
      required: PropTypes.string,
    };

    let add = [];
    if (required)
      add.push(
        <AsterixIcon
          key={uuid()}
          className="text-red-dark"
          style={{height: '10px', width: '10px', flex: '0 0 10px'}}
        />,
      );
    if (!required)
      add.push(
        <span
          key={uuid()}
          className="text-red-dark"
          style={{height: '10px', width: '10px', flex: '0 0 10px'}}
        />,
      );
    return <>{add}</>;
  };

  const InputLabel = ({label, name, required}) => {
    InputLabel.propTypes = {
      name: PropTypes.string,
      required: PropTypes.bool,
      label: PropTypes.string,
    };
    if (!label) return '';
    return (
      <label
        key={uuid()}
        htmlFor={name}
        className={required ? 'required' : ''}
        style={{flex: '0 0 max-content'}}
      >
        {label}
      </label>
    );
  };

  if (!required)
    required =
      rules === 'object' && rules.find(item => item.required === true)
        ? true
        : false;

  return (
    <>
      <fieldset
        key={uuid()}
        style={style}
        className={
          className
            ? className +
              ' max-w-full spac-x-xs items-center flex-wrap place-content-center justify-start '
            : 'max-w-full space-x-xs items-center flex-wrap place-content-center justify-start'
        }
      >
        <InputLabel
          label={label}
          name={name}
          required={required}
          placeholder={placeholder}
        />
        <InputPrefix prefix={prefix} />
        <AdditionalRenderBefore required={required} />
        <InputType
          type={type}
          aria={aria}
          remember={remember}
          name={name}
          required={required}
          placeholder={placeholder}
        />
        <AdditionalRenderAfter required={required} />
        <span className="form-validation-error"></span>
      </fieldset>
    </>
  );
}
