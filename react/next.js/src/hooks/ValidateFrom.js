import React from 'react';
import {Form, Input} from 'semantic-ui-react';

export const validateField = element => {
  let res;
  switch (element.name) {
    case 'email':
      res = element.value.match(
        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
      );
      return res
        ? {state: true, msg: ''}
        : {state: false, msg: 'Bitte eine gültige E-Mail Adresse eingeben'};
    case 'password':
      res = element.value.match(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
      );
      return res
        ? {state: true, msg: ''}
        : {
            state: false,
            msg:
              'Das Password muss mind. eine Nummer, einen Groß- und Kleinbuchstaben enthalten und zwischen 8-16 Zeichen lang sein.',
          };
    case 'plz':
      res = element.value.match(/^(?:[1-9]|0(?!0{4}))\d{4}(?:[-\s]\d{4})?$/gm);
      return res
        ? {state: true, msg: ''}
        : {
            state: false,
            msg: 'Die eingabe entspricht keiner gültigen Postleitzahlt',
          };
    default:
      if (element.getAttribute('required') === '') {
        res = element.value.replace(/\s*/gm, '');
        return res || res === ''
          ? {state: true, msg: ''}
          : {
              state: false,
              msg: 'Das Feld darf nicht leer sein.',
              name: element.name,
            };
      }
  }
};

export const validateForm = el => {
  let res = [];
  let regEx;
  el.forEach(element => {
    switch (element.name) {
      case 'email':
        regEx = element.value.match(
          /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
        );
        if (!regEx)
          res.push({
            state: false,
            msg: 'Bitte eine gültige E-Mail Adresse eingeben',
            name: element.name,
          });
        break;
      case 'password':
        regEx = element.value.match(
          /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
        );
        if (!regEx)
          res.push({
            state: false,
            msg:
              'Das Password muss mind. eine Nummer, einen Groß- und Kleinbuchstaben enthalten und zwischen 8-16 Zeichen lang sein.',
            name: element.name,
          });
        break;
      case 'plz':
        regEx = element.value.match(
          /^(?:[1-9]|0(?!0{4}))\d{4}(?:[-\s]\d{4})?$/gm,
        );
        if (!regEx)
          res.push({
            state: false,
            msg: 'Die eingabe entspricht keiner gültigen Postleitzahlt',
            name: element.name,
          });
        break;
      default:
        if (element.getAttribute('required') === '') {
          regEx = element.value.replace(/\s*/gm, '');
          regEx === '' ? (regEx = null) : (regEx = [regEx.trim()]);
          if (!regEx)
            res.push({
              state: false,
              msg: 'Das Feld darf nicht leer sein.',
              name: element.name,
            });
        }
        break;
    }
  });
  return res;
};

export const createFromFieldGroup = (formObj, errorMsg, setErrorMsg) => {
  let res = [];

  const creatInputField = (e, filterMsg, statFunc, res) => {
    return (
      <Form.Field key={e.name + '-field'}>
        {filterMsg && e.name === filterMsg.name ? (
          <div
            className={filterMsg ? `ui pointing below prompt label` : ''}
            role="alert"
            aria-atomic="true"
          >
            {filterMsg.msg}
          </div>
        ) : (
          ''
        )}
        <Form.Input
          control={e.fieldType}
          rows={4}
          onChange={e => {
            statFunc(e.target.value);
            let res = validateField(e.target);
            if (res && !res.state) {
              setErrorMsg({
                msg: res.msg,
                name: e.target.getAttribute('name'),
              });
            } else {
              setErrorMsg(false);
            }
          }}
          onBlur={e => {
            let res = validateField(e.target);
            if (res && !res.state) {
              setErrorMsg({
                msg: res.msg,
                name: e.target.getAttribute('name'),
              });
            } else {
              setErrorMsg(false);
            }
          }}
          type={e.type ? e.type : 'text'}
          placeholder={e.placeholder ? e.placeholder : ''}
          name={e.name ? e.name : ''}
          required={e.required ? true : false}
          key={e.name}
          label={e.label ? e.label : ''}
          className={
            filterMsg && e.name === filterMsg.name ? 'error field' : ''
          }
        />
      </Form.Field>
    );
  };

  const createSelectField = (e, filterMsg, statFunc, res) => {
    return (
      <Form.Field key={e.name + '-field'}>
        {filterMsg && e.name === filterMsg.name ? (
          <div
            className={filterMsg ? `ui pointing below prompt label` : ''}
            role="alert"
            aria-atomic="true"
          >
            {filterMsg.msg}
          </div>
        ) : (
          ''
        )}
        <Form.Select
          label={e.label ? e.label : ''}
          required={e.required ? true : false}
          onChange={e => {
            statFunc(e.target.children[0].innerHTML);
            let res = validateField(e.target);
            if (res && !res.state) {
              setErrorMsg({
                msg: res.msg,
                name: e.target.getAttribute('name'),
              });
            } else {
              setErrorMsg(false);
            }
          }}
          options={e.options}
          key={e.name}
          className={
            filterMsg && e.name === filterMsg.name ? 'error field' : ''
          }
        />
      </Form.Field>
    );
  };

  const mapFields = (e, filterMsg, statFunc) => {
    switch (e.fieldType) {
      case Input || 'Input':
        return creatInputField(e, filterMsg, statFunc);
      case 'Select':
        return createSelectField(e, filterMsg, statFunc);
      case 'Textarea':
        return creatInputField(e, filterMsg, statFunc);
      default:
        return creatInputField(e, filterMsg, statFunc);
    }
  };

  formObj.map(e => {
    let filterMsg;
    let statFunc = e.state;

    if (Array.isArray(errorMsg)) {
      filterMsg = errorMsg.filter(el => {
        return el.name === e.name;
      });
      filterMsg = filterMsg[0];
    } else {
      filterMsg = errorMsg;
    }
    res.push(mapFields(e, filterMsg, statFunc));
    return true;
  });

  return res;
};
