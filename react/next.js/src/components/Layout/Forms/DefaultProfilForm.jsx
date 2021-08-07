import React, {useState, useContext} from 'react';
import DrawerHeadline from '../../Elements/Titles/DrawerHeadline';
import Link from 'next/link';
import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';
import PropTypes from 'prop-types';
import {MessageContext} from 'context/MessageProvider';
import {updateUser} from 'src/hooks/user';
import {logout} from 'src/hooks/token';
import {useRouter} from 'next/router';
import {
  FormFieldsUser,
  FormFieldsContact,
  FormFieldsAddress,
  FormFieldsPassowrdUpdate,
} from 'components/Elements/FormFields/DefaultProfilFields';
import SignOutIcon from 'public/icons/phosphor-icons/assets/duotone/sign-out-duotone.svg';
import PWDIcon from 'public/icons/phosphor-icons/assets/duotone/lock-duotone.svg';
import ResetIcon from 'public/icons/phosphor-icons/assets/duotone/arrows-clockwise-duotone.svg';
import TextDivider from 'components/Elements/Divider/TextDivider';
import {validateFrom, remapErrors} from 'src/hooks/validateFrom';
import DefaultDragger from 'components/Elements/Uploads/DefaultDragger';

export default function ProfilForm({user, updateState}) {
  ProfilForm.propTypes = {
    user: PropTypes.object,
    updateState: PropTypes.func,
  };

  const router = useRouter();
  const addMessage = useContext(MessageContext);
  const [resetForm, setResetForm] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  if (!user) router.push('/login');

  async function updateUserForm(values, path) {
    let formData = validateFrom('profil');

    remapErrors('profil', formData.data);

    if (!formData.state)
      return addMessage({
        content: 'The form could not be submitted, please check your inputs!',
        type: 'error',
      });

    let dataFields = {};
    formData.data.forEach(e => (dataFields[e.name] = e.value));

    dataFields.registered = user.registered;
    dataFields.locked = user.locked;

    updateUser(dataFields).then(data => {
      data.json().then(res => {
        if (data.status !== 200) {
          addMessage({
            content: res.msg.errors
              ? res.msg.errors.map(msg => msg.message + '\n')
              : 'Please check the marked fields!',
            type: 'error',
          });
          return false;
        }

        res.accessToken && setToken(res.accessToken);
        res.accessToken && delete res.accessToken;

        let emailField = document.querySelector(
          'form[name="profil"] input[type="email"]',
        );
        if (emailField) emailField.setAttribute('data-value', res.email);
        addMessage({content: 'Profil updated successfuly!', type: 'success'});
        updateState({user: res.result});
      });
    });
  }

  return (
    <form name="profil">
      <div className="place-content-end mb-xl place-items-end spaced">
        <DrawerHeadline
          style={{marginBottom: '0'}}
          title={
            user && user.contactFirstName && user.contactLastName
              ? `Profil of ${user.contactFirstName} ${user.contactLastName}`
              : 'Profil'
          }
        />
      </div>

      <div className="form-grid grid justify-items-center place-items-start">
        <div
          style={{maxWidth: '500px'}}
          className="p-lg bg-gray-light flex flex-row flex-wrap  place-content-center justify-self-center place-self-center w-100 h-10 rounded-md"
        >
          <DefaultDragger
            user={user}
            style={{size: '250px'}}
            upload={{
              name: 'files',
              accept: '.jpg,.png',
            }}
          />

          {user && user.registered === false && (
            <p style={{color: 'red', marginTop: '0.5rem'}}>
              You are not registered in the shop please
              <Link href="/register">register</Link>
            </p>
          )}
        </div>

        <div
          style={{maxWidth: '500px'}}
          className="p-lg flex flex-row flex-wrap  place-content-center justify-self-center place-self-center w-100 h-100  rounded-md border-2 border-primary"
        >
          <FormFieldsUser
            resetForm={resetForm}
            setResetForm={setResetForm}
            updateState={updateState}
            user={user}
          />
          {changePassword && (
            <FormFieldsPassowrdUpdate
              resetForm={resetForm}
              setResetForm={setResetForm}
              updateState={updateState}
              user={user}
            />
          )}
          <div className="spaced mt-lg place-content-end">
            {changePassword && (
              <>
                <DefaultButton
                  aria={`save new password`}
                  title="Save"
                  className="small"
                  type="primary"
                  htmlType="submit"
                  onClick={e => {
                    e.preventDefault();
                    updateUserForm();
                  }}
                />
                <DefaultButton
                  aria={`cancel password change`}
                  title="Cancel"
                  className="border-2 border-gray small text-gray"
                  onClick={e => {
                    e.preventDefault();
                    setChangePassword(false);
                  }}
                  type="outlined"
                />
              </>
            )}
            {!changePassword && (
              <>
                <DefaultButton
                  aria={`change password`}
                  icon={<PWDIcon style={{width: '20px', height: '20px'}} />}
                  className="small"
                  onClick={e => {
                    e.preventDefault();
                    setChangePassword(true);
                  }}
                  type="secondary"
                />
                <DefaultButton
                  aria={`reset form`}
                  icon={<ResetIcon style={{width: '20px', height: '20px'}} />}
                  className="small"
                  type="primary"
                  onClick={e => {
                    e.preventDefault();
                    setResetForm(true);
                  }}
                />
                <DefaultButton
                  aria={`sign out`}
                  icon={<SignOutIcon style={{width: '20px', height: '20px'}} />}
                  type="primary"
                  className="small"
                  onClick={e => {
                    e.preventDefault();
                    logout(updateState);
                  }}
                />
              </>
            )}
          </div>
        </div>

        <div
          style={{maxWidth: '500px'}}
          className="p-lg flex flex-row flex-wrap  place-content-center justify-self-center place-self-center w-100 h-100 rounded-md border-2 border-primary"
        >
          <TextDivider title="Contact Info" className="text-secondary" />
          <FormFieldsContact
            resetForm={resetForm}
            setResetForm={setResetForm}
            updateState={updateState}
            user={user}
          />
        </div>
        <div
          style={{maxWidth: '500px'}}
          className="p-lg flex flex-row flex-wrap  place-content-center justify-self-center place-self-center w-100 h-100 rounded-md border-2 border-primary"
        >
          <TextDivider title="Address Info" className="text-secondary" />
          <FormFieldsAddress
            resetForm={resetForm}
            setResetForm={setResetForm}
            updateState={updateState}
            user={user}
          />
        </div>
        <div
          style={{maxWidth: '500px'}}
          className="p-lg bg-gray flex flex-row flex-wrap  place-content-center justify-self-center place-self-center w-100 h-100 bg-gray-light rounded-md"
        >
          <div className="mt-xl spaced place-content-end">
            <DefaultButton
              aria={`save changes`}
              title="Save"
              onClick={e => {
                e.preventDefault();
                updateUserForm();
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
        </div>
      </div>
    </form>
  );
}
