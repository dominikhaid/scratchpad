import React, {useState, useEffect} from 'react';
import {
  Header,
  Form,
  Button,
  Segment,
  Divider,
  Image,
  Icon,
  Container,
} from 'semantic-ui-react';
import Head from 'next/head';
import {useRouter} from 'next/router';

import DimmerMain from '@/components/loader/MainDimmer';

import {validateForm, createFromFieldGroup} from '@/hooks/ValidateFrom';
import Recaptcha from 'react-recaptcha';

export default function Kontakt(props) {
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState(false);
  const [email, setEmail] = useState('');
  const [anrede, setAnrede] = useState('');
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [nachricht, setNachricht] = useState('');
  const [telefon, setTelefon] = useState('');
  const [mobile, setMobile] = useState('');

  const [dimmerState, setDimmerState] = useState(false);
  const [dimmerMsg, setDimmerMsg] = useState('Formular wird übermittelt');

  const [form] = useState([
    {
      required: false,
      label: 'Anrede',
      fieldType: 'Select',
      type: 'text',
      placeholder: 'Anrede',
      value: anrede,
      options: [
        {
          key: '0',
          text: 'Herr',
          value: '0',
        },
        {
          key: '1',
          text: 'Frau',
          value: '1',
        },
        {
          key: '2',
          text: 'Herr Dr.',
          value: '2',
        },
        {
          key: '3',
          text: 'Frau Dr.',
          value: '3',
        },
        {
          key: '4',
          text: 'Herr Prof. Dr.',
          value: '4',
        },
        {
          key: '5',
          text: 'Frau Prof. Dr.',
          value: '5',
        },
      ],
      name: 'anrede',
      state: setAnrede,
    },
  ]);
  const [form1] = useState([
    {
      required: true,
      label: 'Vorname',
      fieldType: 'Input',
      type: 'text',
      placeholder: 'Vorname',
      value: vorname,
      name: 'vorname',
      state: setVorname,
    },
    {
      required: true,
      label: 'Nachname',
      fieldType: 'Input',
      type: 'text',
      placeholder: 'Nachname',
      value: nachname,
      name: 'nachname',
      state: setNachname,
    },
  ]);
  const [form2] = useState([
    {
      required: true,
      label: 'Nachricht',
      fieldType: 'Textarea',
      type: 'text',
      placeholder: 'Nachricht',
      value: nachricht,
      name: 'nachricht',
      state: setNachricht,
    },
  ]);

  const [form3] = useState([
    {
      required: true,
      label: 'E-Mail',
      fieldType: 'Input',
      type: 'email',
      placeholder: 'E-Mail',
      value: email,
      name: 'email',
      state: setEmail,
    },
    {
      required: false,
      label: 'Telefon',
      fieldType: 'Input',
      type: 'text',
      placeholder: 'Telefon',
      value: telefon,
      name: 'telefon',
      state: setTelefon,
    },
    {
      required: false,
      label: 'Mobile',
      fieldType: 'Input',
      type: 'text',
      placeholder: 'Mobile',
      value: mobile,
      name: 'mobile',
      state: setMobile,
    },
  ]);

  const sendForm = () => {
    var template_params = {
      replay: email,
      subject: `www.DominikHaid.de Kontakt Form`,
      to: email,
      html: `<p>Name: ${anrede} ${vorname} ${nachname}<br/>Telefon: ${telefon}<br/>Mobile: ${mobile}<br/>Nachricht: ${nachricht}</p>`,
    };

    let urlParams = '';

    for (const key in template_params) {
      if (template_params.hasOwnProperty(key)) {
        urlParams += `${key}=${template_params[key]}&`;
      }
    }

    if (urlParams.lastIndexOf('&') === urlParams.length - 1) {
      urlParams = urlParams.slice(0, urlParams.length - 1);
    }

    fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/mail/send', {
      body: urlParams,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJCYWNrZW5kTWFuYWdlciIsIm5hbWUiOiJEb21pbmlrIEhhaWQiLCJpYXQiOjY5NzQ1NzI5MzR9.MVumCHzp8CA97Qpz-YX_Vq55TilGGJ28GcLoU0mU0CA',
      },
      method: 'post',
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setDimmerMsg(`Email send to ${data.success.accepted[0]}`);
          setTimeout(() => {
            setDimmerState('');
          }, 1000);
        } else {
          setDimmerMsg('Email konnte nicht verschickt werden');
          setTimeout(() => {
            setDimmerState('');
          }, 1000);
        }
      })
      .catch(error => {
        setDimmerMsg('Email konnte nicht verschickt werden');
        setTimeout(() => {
          setDimmerState('');
        }, 1000);
      });
  };

  const [verifyed, setVerifyed] = useState(false);
  let recaptchaInstance;

  useEffect(() => {
    if (verifyed) sendForm();
    return () => {
      //cleanup
    };
    // eslint-disable-next-line
  }, [verifyed]);

  const executeCaptcha = function () {
    recaptchaInstance.execute();
  };

  const verifyRecapt = function () {
    setVerifyed(true);
  };

  var reCaptready = function () {
    console.debug('Recaptcha ready');
  };

  return (
    <>
      <Head>
        <title>Print & Screen-Design | Kontakt</title>
        <meta
          name="description"
          content="Der Beste Weg mit uns Kontakt aufzunehmen ist über unser Kontaktformular. Dieses findest du auf dieser Seite. Schnell und unkompliziert fragen kostet nichts."
        />
      </Head>
      <DimmerMain state={dimmerState} msg={dimmerMsg} />
      <Container className="material-grid flex-center  two-column reverse min-height">
        <Segment className="material-grid__col--medium--4 flex-center">
          <picture style={{maxWidth: '500px'}}>
            <source
              srcSet={
                process.env.NEXT_PUBLIC_IMGPATH +
                '/2020/04/dom-1zu1-sw-mid-294x300.jpg 350w'
              }
              media="(max-width: 350px)"
            />
            <Image
              height="auto"
              width={props.responsiveContext.window[0]}
              src={
                process.env.NEXT_PUBLIC_IMGPATH +
                '/2020/04/dom-1zu1-sw-mid-768x785.jpg'
              }
              alt="Dominik Haid"
              title="Dominik Haid"
            />
          </picture>
          <address className="flex-con flex-center text-center ">
            <Header as="h2" className="primaryColor flex-item-4">
              Dominik Haid
            </Header>
            <p className="flex-item-4">
              64367 Mühltal, Waschenbach
              <br />
              Zum Birkenwald 10
            </p>
            <Divider className="flex-item-4" />
            <p className="flex-item-4">
              <Icon name="mail" />
              <a href="mailto:info@dominikhaid.de">INFO@DOMINIKHAID.DE</a>
            </p>
            <p className="flex-item-4">
              <Icon name="mobile alternate" />
              <a href="tel:+49 6154-53361">+49 176-60423218&nbsp;</a>
            </p>
            <p className="flex-item-4">
              <Icon name="phone square" />
              <a href="tel:+49 6154-53361">+49 6154-53361</a>
            </p>
          </address>
        </Segment>

        <Segment className="material-grid__col--medium--7">
          <Form id="kontaktForm">
            <Header as="h1">Kontakt&shy;formular</Header>
            <p>
              Bitte beschreiben Sie kurz Ihr Anliegen, wie und wann ich Sie am
              besten erreichen kann. Bitte nutzen Sie bevorzugt dieses Formular,
              im Ausnahmefall finden Sie ebenfalls meine Kontaktdaten auf dieser
              Seite.
            </p>
            <Divider />
            <Form.Group widths="equal">
              {createFromFieldGroup(form, errorMsg, setErrorMsg)}
            </Form.Group>
            <Form.Group widths="equal">
              {createFromFieldGroup(form1, errorMsg, setErrorMsg)}
            </Form.Group>
            <Form.Group widths="equal" className={'max-width'}>
              {createFromFieldGroup(form2, errorMsg, setErrorMsg)}
            </Form.Group>
            <Form.Group widths="equal">
              {createFromFieldGroup(form3, errorMsg, setErrorMsg)}
            </Form.Group>
            <Divider />
            <Button
              type="submit"
              className="secondary"
              onClick={e => {
                e.preventDefault();
                let res = validateForm(
                  document.querySelectorAll(
                    '#kontaktForm .field *:nth-child(2)',
                  ),
                );
                if (res.length > 0) {
                  setErrorMsg(res);
                } else {
                  setDimmerState('active');
                  setDimmerMsg('Formular wird übermittelt');
                  executeCaptcha();
                  sendForm();
                }
              }}
            >
              Submit
            </Button>
            <p className="primaryColor" style={{display: 'inline'}}>
              <small>&nbsp;*This Form is protected by Google reCaptcha</small>
            </p>
            <Recaptcha
              ref={e => (recaptchaInstance = e)}
              sitekey="6LeJB9QUAAAAAM_sQFhmga3fYFD7MaZ8zldDlkau"
              size="invisible"
              render="explicit"
              onloadCallback={reCaptready}
              verifyCallback={verifyRecapt}
            />
          </Form>
        </Segment>
      </Container>
    </>
  );
}
