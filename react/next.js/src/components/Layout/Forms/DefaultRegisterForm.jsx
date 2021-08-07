import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';
import TextDivider from 'components/Elements/Divider/TextDivider';
import {MessageContext} from 'context/MessageProvider';
import PropTypes from 'prop-types';
import React, {useContext, useState} from 'react';
import {remapErrors, validateFrom} from 'src/hooks/validateFrom';
import {
  FormFieldsAddress,
  FormFieldsContact,
  FormFieldsPassowrd,
  FormFieldsUser,
} from 'components/Elements/FormFields/DefaultProfilFields';
import DrawerHeadline from 'components/Elements/Titles/DrawerHeadline';
import DefaultDragger from 'components/Elements/Uploads/DefaultDragger';
import {createUser} from 'src/hooks/user';
import {imgToDataImg} from 'src/hooks/imgToDataImg';
import {setToken} from 'src/hooks/token';

export default function DefaultRegisterForm({user, updateState}) {
  DefaultRegisterForm.propTypes = {
    user: PropTypes.object,
    updateState: PropTypes.func,
  };

  const addMessage = useContext(MessageContext);
  const [resetForm, setResetForm] = useState(false);

  async function registerUser() {
    let formData = validateFrom('register');

    remapErrors('register', formData.data);

    if (!formData.state)
      return addMessage({
        content: 'The form could not be submitted, please check your inputs!',
        type: 'error',
      });

    let dataFields = {};
    formData.data.forEach(e => (dataFields[e.name] = e.value));

    if (
      dataFields.customerPhoto &&
      !/^data:image/.test(dataFields.customerPhoto)
    )
      dataFields.customerPhoto = await imgToDataImg(dataFields.customerPhoto);

    createUser(dataFields)
      .then(data => {
        data.json().then(res => {
          if (data.status !== 200) {
            addMessage({
              content: res.msg.errors
                ? res.msg.errors.map(e => e.message)
                : res.msg,
              type: 'error',
            });
            return;
          }

          res.accessToken && setToken(res.accessToken);
          res.accessToken && delete res.accessToken;

          if (!res.customerPhoto && res.customerPhoto)
            res.customerPhoto = res.customerPhoto;

          addMessage({
            content: `Welcome on board ${
              res.contactFirstName ? res.contactFirstName : ''
            }!`,
            type: 'success',
          });

          updateState({user: res});

          if (document.getElementById('drawer-close'))
            document.getElementById('drawer-close').click();

          return true;
        });
      })
      .catch(error => {
        addMessage({
          content: error.msg.errors
            ? error.msg.errors.map(e => e.message)
            : error.msg,
          type: 'error',
        });
        return false;
      });
  }

  return (
    <form name="register">
      <div className="place-content-end mb-xl place-items-end spaced">
        <DrawerHeadline
          style={{marginBottom: '0', width: '100%', textAlign: 'center'}}
          title="Register"
        />
      </div>
      <div className="form-grid grid justify-items-center place-items-start">
        <div
          style={{maxWidth: '500px'}}
          className="sm:p-xs md:p-lg lg:p-lg xl:p-lg flex flex-row flex-wrap  place-content-center justify-self-center place-self-center w-100 h-100 bg-gray-light rounded-md"
        >
          <DefaultDragger
            user={user}
            style={{size: '200px'}}
            upload={{
              name: 'files',
              accept: '.jpg,.png',
            }}
          />
        </div>
        <div
          style={{maxWidth: '500px', width: '100%'}}
          className="rounded-md border-2 border-primary sm:p-xs md:p-lg lg:p-lg xl:p-lg"
        >
          <TextDivider title="User Info" className="text-xl text-secondary" />
          <FormFieldsUser
            resetForm={resetForm}
            setResetForm={setResetForm}
            updateState={updateState}
            user={user}
          />
          <FormFieldsPassowrd
            resetForm={resetForm}
            setResetForm={setResetForm}
            updateState={updateState}
            user={user}
          />
        </div>
        <div
          style={{maxWidth: '500px', width: '100%', height: '100%'}}
          className="rounded-md border-2 border-primary sm:p-xs md:p-lg lg:p-lg xl:p-lg"
        >
          <TextDivider
            title="Contact Info"
            className="text-xl text-secondary"
          />
          <FormFieldsContact
            resetForm={resetForm}
            setResetForm={setResetForm}
            updateState={updateState}
            user={user}
          />
        </div>
        <div
          style={{maxWidth: '500px', width: '100%'}}
          className="rounded-md border-2 border-primary sm:p-xs md:p-lg lg:p-lg xl:p-lg"
        >
          <TextDivider
            title="Address Info"
            className="text-xl text-secondary"
          />
          <FormFieldsAddress
            resetForm={resetForm}
            setResetForm={setResetForm}
            updateState={updateState}
            user={user}
          />
        </div>
      </div>
      <div className="mt-xl spaced sm:p-xs md:p-lg lg:p-lg xl:p-lg justify-items-center place-items-end place-content-end">
        <DefaultButton
          aria={`submit register`}
          title="Register"
          onClick={e => {
            e.preventDefault();
            registerUser();
          }}
          type="secondary"
          htmlType="submit"
        />
        <DefaultButton
          aria={`reset changes`}
          title="Reset"
          type="primary"
          onClick={e => {
            e.preventDefault();
            setResetForm(true);
          }}
        />
      </div>
    </form>
  );
}
