import React, {useState, useContext} from 'react';
import DrawerHeadline from 'components/Elements/Titles/DrawerHeadline';
import TextDivider from 'components/Elements/Divider/TextDivider';
import PropTypes from 'prop-types';
import {loginUserPlain} from 'src/hooks/user';
import {MessageContext} from 'context/MessageProvider';
import {FormFields} from 'components/Elements/FormFields/DefaultLoginFields';
import AddUserIcon from 'public/icons/phosphor-icons/assets/duotone/user-circle-plus-duotone.svg';
import {validateFrom, remapErrors} from 'src/hooks/validateFrom';
import AuthProvider from 'components/Layout/Auth/AuthListSmall';
import RegisterForm from './DefaultRegisterForm';
import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';
import {setToken} from 'src/hooks/token';

export default function LoginForm({updateState, user}) {
  LoginForm.propTypes = {
    updateState: PropTypes.func,
    user: PropTypes.object,
  };

  const RenderLogin = ({user, setRender, updateState}) => {
    RenderLogin.propTypes = {
      updateState: PropTypes.func,
      user: PropTypes.object,
      setRender: PropTypes.func,
    };

    const addMessage = useContext(MessageContext);

    async function loginAndValidate(values, path) {
      let formData = validateFrom('login');
      remapErrors('login', formData.data);

      if (!formData.state)
        return addMessage({
          content: 'The form could not be submitted, please check your inputs!',
          type: 'error',
        });

      // TODO MAKE A FORM HANDLE CLASS
      let dataFields = {};
      let exclude = ['remember'];

      formData.data.forEach(e => {
        exclude.find(e => e === e.name)
          ? false
          : (dataFields[e.name] = e.value);
      });

      loginUserPlain(dataFields).then(data => {
        data.json().then(res => {
          if (data.status !== 200) {
            addMessage({content: res.msg, type: 'error'});
            return false;
          }

          res.accessToken && setToken(res.accessToken);
          res.accessToken && delete res.accessToken;

          if (document.getElementById('drawer-close'))
            document.getElementById('drawer-close').click();

          addMessage({
            content: `Welcome back ${res.contactFirstName} ${res.contactLastName}`,
            type: 'success',
          });
          updateState({user: res});
        });
      });
    }

    return (
      <form name="login">
        <DrawerHeadline title={'Login'} />
        <div className="form-grid grid justify-items-center place-items-start">
          <div
            style={{maxWidth: '500px'}}
            className="sm:p-xs md:p-lg lg:p-lg xl:p-lg flex flex-row flex-wrap  place-content-center justify-self-center place-self-center w-100 h-10 rounded-md border-2 border-primary"
          >
            <FormFields updateState={updateState} user={user} />
            <div className="flex justify-center w-100">
              <DefaultButton
                aria={`login`}
                className="mb-4xl"
                onClick={e => {
                  e.preventDefault();
                  loginAndValidate();
                }}
                title="Login"
                type="secondary"
              />
            </div>
          </div>

          <div
            style={{maxWidth: '500px'}}
            className="p-lg flex flex-row flex-wrap  place-content-center justify-self-center place-self-center w-100 h-100  rounded-md border-2 border-primary"
          >
            <TextDivider className="text-center" title={'Sign In  With'} />
            <div className="items-center justify-center spaced flex-warp">
              <DefaultButton
                aria={`register`}
                className="small"
                type="icon"
                style={{
                  width: '50px',
                  height: '50px',
                }}
                icon={<AddUserIcon />}
                onClick={e => {
                  e.preventDefault();
                  setRender('register');
                }}
              />
              <AuthProvider
                className="flex-1 ml-lg"
                user={user}
                updateState={updateState}
              />
            </div>
          </div>
        </div>
      </form>
    );
  };

  const [renderComponent, setRender] = useState('login');

  if (renderComponent !== 'register')
    return (
      <RenderLogin
        updateState={updateState}
        user={user}
        setRender={setRender}
      />
    );

  return (
    <RegisterForm
      user={user}
      updateState={updateState}
      cancel={() => setRender('login')}
    />
  );
}
