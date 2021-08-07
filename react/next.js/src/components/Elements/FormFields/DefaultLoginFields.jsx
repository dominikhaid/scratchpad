import React from 'react';
import MailOutlined from 'public/icons/phosphor-icons/assets/duotone/envelope-duotone.svg';
import LockOutlined from 'public/icons/phosphor-icons/assets/duotone/lock-duotone.svg';
import DefaultInput from '../Inputs/DefaultInput';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

const FormFields = ({user}) => {
  FormFields.propTypes = {
    align: PropTypes.string,
    updateState: PropTypes.func,
    user: PropTypes.object,
  };

  const data = [
    {
      input: {
        name: 'email',
        type: 'email',
        aria: 'user email',
        prefix: <MailOutlined />,
        placeholder: 'E-Mail',
        value: user && user.email ? user.email : '',
        required: true,
      },
    },
    {
      input: {
        name: 'password',
        required: true,
        aria: 'user password',
        type: 'password',
        clear: false,
        prefix: <LockOutlined />,
        placeholder: 'Password',
        value: user && user.password ? user.password : '',
      },
    },
    {
      input: {
        aria: 'Keep me signed in',
        name: 'remember',
        type: 'checkbox',
        label: 'Keep me signed in',
      },
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field.input} />;
  });

  return fields;
};

export {FormFields};
