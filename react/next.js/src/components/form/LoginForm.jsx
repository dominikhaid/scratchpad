import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {
  Button,
  Header,
  Icon,
  Segment,
  Form,
  Input,
  Modal,
  Divider,
  Container,
} from 'semantic-ui-react';
import SysMsg from '../msg/SysMsg';
import {validateForm, createFromFieldGroup} from '@/hooks/ValidateFrom';

export default function LoginForm(props) {
  console.debug('LoginForm render', props);
  const [open, setOpen] = useState(false);

  const [errorMsg, setErrorMsg] = useState(false);
  const [loginState, setLoginUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [form] = useState([
    {
      required: true,
      label: 'E-Mail',
      fieldType: Input,
      type: 'email',
      placeholder: 'E-Mail',
      value: email,
      name: 'email',
      state: setEmail,
    },
    {
      required: true,
      label: 'Passwort',
      fieldType: Input,
      type: 'password',
      placeholder: 'Passwort',
      value: password,
      name: 'password',
      state: setPassword,
    },
  ]);

  useEffect(() => {
    return () => {};
  }, [loginState]);

  const handleCreateAcc = () => {};

  const handleGoogleAuth = () => {
    async function run() {
      const response = await props.userAuth.loginWithGoogle();

      if (response.msgTitle)
        props.userAuth.setUserMsg(
          response.msgTitle,
          'Please try again.',
          response.state ? false : 'error',
        );
      if (response.state === true) setLoginUser(true);
    }
    run();
  };

  const handlePasswortAuth = (email, password) => {
    async function run(email, password) {
      const response = await props.userAuth.loginWithPassword(email, password);
      if (response.msgTitle)
        props.userAuth.setUserMsg(
          response.msgTitle,
          'Please try again.',
          response.state ? false : 'error',
        );
      if (response.state === true) setLoginUser(true);
    }
    run(email, password);
  };

  return !props.userAuth.userData.uid ? (
    <>
      <Container className="material-grid flex-center min-height">
        <Segment style={{maxWidth: '750px', justifySelf: 'center'}}>
          {props.userAuth.userData.msg.title ||
          props.userAuth.userData.msg.content ? (
            <SysMsg userAuth={props.userAuth} />
          ) : (
            <Header as="h2" icon>
              <Icon name="user circle" size="massive" />
              Dashboard
              <Header.Subheader>Login or Create an Account.</Header.Subheader>
            </Header>
          )}

          <Divider className="flex-item-4" />
          <p className="flex-item-4 text-center">
            Melde dich hier an um Zugriff auf für dich breit gestellte
            Inromationen und Ressourcen zu erhalten. Administratoren können aus
            dem Dashboard heraus die Website verwalten.
            <small className="primaryColor">
              <sup>*</sup>Momentan ist dieser Bereich bestimmten Usern
              vorbehalten, der Userbereich befindet sich noch im Ausbau.
            </small>
          </p>
          <Divider className="flex-item-4" />
          <Button
            primary
            onClick={e => {
              setOpen(true);
            }}
          >
            Login
          </Button>
          <Button secondary onClick={handleGoogleAuth}>
            Login with Google
          </Button>
          <Button disabled secondary onClick={handleCreateAcc}>
            Create Account
          </Button>
        </Segment>
      </Container>
      <Modal size={'large'} open={open}>
        <Modal.Header>Login mit Print & Scren-Design Account</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group id="passwordLogin" widths="equal">
              {createFromFieldGroup(form, errorMsg, setErrorMsg)}
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            negative
          >
            Close
          </Button>
          <Button
            type="submit"
            onClick={() => {
              let res = validateForm(
                document.querySelectorAll('#passwordLogin input'),
              );
              if (res.length > 0) {
                setErrorMsg(res);
              } else {
                handlePasswortAuth(email, password);
              }
            }}
          >
            Sign in
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  ) : (
    <Redirect to="/dashboard" userAuth={props.userAuth} />
  );
}
