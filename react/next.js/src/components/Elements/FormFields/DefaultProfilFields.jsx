import React, {useEffect} from 'react';
import LockIcon from 'public/icons/phosphor-icons/assets/duotone/lock-duotone.svg';
import MailIcon from 'public/icons/phosphor-icons/assets/duotone/envelope-duotone.svg';
import UserIcon from 'public/icons/phosphor-icons/assets/duotone/user-circle-duotone.svg';
import PhooneIcon from 'public/icons/phosphor-icons/assets/duotone/phone-duotone.svg';
import HomeIcon from 'public/icons/phosphor-icons/assets/duotone/house-line-duotone.svg';
import PinIcon from 'public/icons/phosphor-icons/assets/duotone/map-pin-duotone.svg';
import MapFoldIcon from 'public/icons/phosphor-icons/assets/duotone/map-trifold-duotone.svg';
import GlobeIcon from 'public/icons/phosphor-icons/assets/duotone/globe-stand-duotone.svg';
import DefaultInput from '../Inputs/DefaultInput';
import uuid from 'react-uuid';

const FormFieldsUser = ({resetForm, setResetForm, user}) => {
  useEffect(() => {
    const reset = () => {
      setResetForm(false);
    };

    if (resetForm) reset();
    return () => {};
  }, [resetForm]);

  const data = [
    {
      input: {
        name: 'userName',
        aria: 'user name',
        type: 'text',
        prefix: <UserIcon />,
        placeholder: 'User Name',
        value: user && user.userName ? user.userName : '',
        required: true,

        rules: [
          {
            type: 'text',
            required: true,
          },
        ],
      },
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field.input} />;
  });
  return fields;
};

const FormFieldsPassowrdUpdate = ({resetForm, setResetForm, user}) => {
  useEffect(() => {
    const reset = () => {
      setResetForm(false);
    };

    if (resetForm) reset();
    return () => {};
  }, [resetForm]);

  const data = [
    {
      input: {
        name: 'old_password',
        aria: 'input your old password',
        type: 'password',
        clear: false,
        prefix: <LockIcon />,
        placeholder: 'Old Password',
        value: user && user.password ? user.password : '',
        required: true,
      },
    },
    {
      input: {
        name: 'password',
        aria: 'input your new password',
        type: 'password',
        clear: false,
        required: true,
        prefix: <LockIcon />,
        placeholder: 'New Password',
        value: user && user.password ? user.password : '',
      },
    },
    {
      input: {
        name: 'password_repeat',
        aria: 'repeat your password',
        type: 'password',
        clear: false,
        required: true,
        prefix: <LockIcon />,
        placeholder: 'Confirm Password',
        value: user && user.password ? user.password : '',
      },
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field.input} />;
  });
  return fields;
};

const FormFieldsPassowrd = ({resetForm, setResetForm, user}) => {
  useEffect(() => {
    const reset = () => {
      setResetForm(false);
    };

    if (resetForm) reset();
    return () => {};
  }, [resetForm]);

  const data = [
    {
      input: {
        name: 'password',
        aria: 'input your password',
        type: 'password',
        clear: false,
        required: true,
        prefix: <LockIcon />,
        placeholder: 'New Password',
        value: user && user.password ? user.password : '',
      },
    },
    {
      input: {
        name: 'password_repeat',
        aria: 'reapet your password',
        type: 'password',
        clear: false,
        required: true,
        prefix: <LockIcon />,
        placeholder: 'Confirm Password',
        value: user && user.password ? user.password : '',
      },
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field.input} />;
  });
  return fields;
};

const FormFieldsContact = ({resetForm, setResetForm, user}) => {
  useEffect(() => {
    const reset = () => {
      setResetForm(false);
    };

    if (resetForm) reset();
    return () => {};
  }, [resetForm]);

  const data = [
    {
      input: {
        name: 'contactFirstName',
        aria: 'input your first name',
        prefix: <UserIcon />,
        type: 'text',
        placeholder: 'First Name',
        required: true,
        value: user && user.contactFirstName ? user.contactFirstName : '',
      },
    },
    {
      input: {
        name: 'contactLastName',
        aria: 'input your last name',
        prefix: <UserIcon />,
        type: 'text',
        placeholder: 'Last Name',
        required: true,
        value: user && user.contactLastName ? user.contactLastName : '',
      },
    },
    {
      input: {
        name: 'email',
        aria: 'input your email',
        prefix: <MailIcon />,
        placeholder: 'E-Mail',
        required: true,
        type: 'email',
        remember: true,
        value: user && user.email ? user.email : '',
      },
    },
    {
      input: {
        name: 'phone',
        aria: 'input your phone number',
        prefix: <PhooneIcon />,
        placeholder: 'Phone',
        type: 'tel',
        value: user && user.phone ? user.phone : '',
      },
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field.input} />;
  });
  return fields;
};

const FormFieldsAddress = ({resetForm, setResetForm, user}) => {
  useEffect(() => {
    const reset = () => {
      setResetForm(false);
    };

    if (resetForm) reset();
    return () => {};
  }, [resetForm]);

  const data = [
    {
      input: {
        name: 'addressLine1',
        aria: 'input your first address line',
        prefix: <PinIcon />,
        placeholder: 'Address One',
        value: user && user.addressLine1 ? user.addressLine1 : '',
        type: 'text',
        required: true,
      },
    },
    {
      input: {
        name: 'addressLine2',
        aria: 'input your second address line',
        prefix: <PinIcon />,
        type: 'text',
        placeholder: 'Address Two',
        value: user && user.addressLine2 ? user.addressLine2 : '',
      },
    },
    {
      input: {
        name: 'city',
        aria: 'enter your city name',
        prefix: <HomeIcon />,
        placeholder: 'City',
        type: 'text',
        required: true,
        value: user && user.city ? user.city : '',
      },
    },
    {
      input: {
        name: 'state',
        aria: 'input your state',
        prefix: <MapFoldIcon />,
        placeholder: 'State',
        required: true,
        type: 'text',
        value: user && user.state ? user.state : '',
      },
    },
    {
      input: {
        name: 'postalCode',
        aria: 'input your postal code',
        prefix: <MapFoldIcon />,
        placeholder: 'Postal Code',
        required: true,
        type: 'text',
        rules: 'zip',
        value: user && user.postalCode ? user.postalCode : '',
      },
    },
    {
      input: {
        name: 'country',
        aria: 'input your country',
        prefix: <GlobeIcon />,
        placeholder: 'Country',
        required: true,
        type: 'text',
        value: user && user.country ? user.country : '',
      },
    },
  ];

  const fields = data.map(field => {
    return <DefaultInput key={uuid()} {...field.input} />;
  });
  return fields;
};

export {
  FormFieldsUser,
  FormFieldsContact,
  FormFieldsAddress,
  FormFieldsPassowrd,
  FormFieldsPassowrdUpdate,
};
