import React, {useState} from 'react';
import {
  Header,
  Segment,
  Container,
  Grid,
  Icon,
  Image,
  Label,
  Visibility,
  Transition,
} from 'semantic-ui-react';

import Head from 'next/head';

export default function Printundscreendesign(props) {
  const [nginx, setNginx] = useState({
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    },
  });

  const [reactDiv, setReactDiv] = useState({
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    },
  });

  const [reactSemantic, setReactSemantic] = useState({
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    },
  });

  const [wordpress, setWordpress] = useState({
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
    },
  });

  const durationVal = [2000];

  const renderCustomPost = () => {
    return (
      <>
        <Head>
          <title>Print & Screen-Design | Home</title>
          <meta
            name="description"
            content="Persöhnliche Website für und über Design aus dem Bereich Print und Webmedien, Web-Entwicklung und Gestaltung."
          />
        </Head>
        <Container className="margin-top material-grid">
          <Header className="material-grid__col--medium--12" as="h1">
            Print & Screen - Design
          </Header>
        </Container>

        <Container className="material-grid flex-center">
          <div className="material-grid__col--medium--4 primaryBg flex-center">
            <Header as="h2">Wilkommen</Header>
            <p>
              Auf dieser Seite behandle ich Themen rund um das Thema Print und
              Screen- Design. Im besonderen beschäftige ich mich mit Themen aus
              dem Bereich Webentwicklung. Der Fokus liegt hierbei auf gängigen
              Frontend Frameworks wie React.js, Angular oder Vue.js. Im Backend
              liegt mir Node.js am Herzen aber auch PHP wird auf dieser Seite
              seinen Platz finden. Gängige Webstandards wie CSP, REST, OAuth
              oder HTTP2 zählen genau so zu unseren Interessen wie das
              bereitstellen von Micro-Services mit z.B. Docker.
            </p>
          </div>
          <Segment className="material-grid__col--medium--7 center padding-remove fluid-img">
            <picture>
              <source
                srcSet={
                  process.env.NEXT_PUBLIC_IMGPATH +
                  '/2020/04/ortho-ci-2020.jpg 1800w'
                }
                media="(min-width: 1800px)"
              />
              <source
                srcSet={
                  process.env.NEXT_PUBLIC_IMGPATH +
                  '/2020/04/ortho-ci-2020-642x300.jpg 650w'
                }
                media="(max-width: 650px)"
              />
              <Image
                height="auto"
                width="100%"
                src={
                  process.env.NEXT_PUBLIC_IMGPATH +
                  '/2020/04/ortho-ci-2020-768x432.jpg'
                }
                alt="Overview CI Dominik Haid 2020"
                title="Overview CI Dominik Haid 2020"
              />
            </picture>
          </Segment>
        </Container>

        <Container className="margin border padding-remove" fluid>
          <picture>
            <source
              srcSet={
                process.env.NEXT_PUBLIC_IMGPATH +
                '/2020/04/ci-screen-2020.jpg 1800w'
              }
              media="(min-width: 1800px)"
            />
            <source
              srcSet={
                process.env.NEXT_PUBLIC_IMGPATH +
                '/2020/04/ci-screen-2020-642x300.jpg 650w'
              }
              media="(max-width: 650px)"
            />
            <source
              srcSet={
                process.env.NEXT_PUBLIC_IMGPATH +
                '/2020/04/ci-screen-2020-1536x864.jpg 1200w'
              }
              media="(min-width: 1200px)"
            />
            <Image
              height="auto"
              width="100%"
              src={
                process.env.NEXT_PUBLIC_IMGPATH +
                '/2020/04/ci-screen-2020-768x432.jpg'
              }
              alt="Overview CI Screen Design 2020"
              title="Overview CI Screen Design 2020"
            />
          </picture>
        </Container>

        <Container className="material-grid flex-center">
          <div className="material-grid__col--medium--4 primaryBg flex-con flex-center">
            <Header as="h2" className="margin-bottom">
              Webdesign & Entwicklung
            </Header>
            <Icon aria-hidden="false" name="globe" className="cliped">
              Diese Seite wurde mit gängigen modernen Technologien Entwickelt.
              Besonderes Augenmerk Viel dabei auf Performance, Erweiterbarkeit
              und Zukunftssicherheit. Ziel ist es eine Website zu bauen die
              allen bestehenden und kommenden Ansprüchen im Bereich
              Webentwicklung gerecht wird. Hohe Anpassbarkeit, Flexibilität,
              Skalierbarkeit, Performance, Integration und Sicherheit sind in
              der modernen Webentwicklung wichtige Kriterien die Berücksichtigt
              werden müssen.
            </Icon>
          </div>

          <Grid
            centered
            columns="equal"
            className="material-grid__col--medium--7 labeledIconGrid ui segment flex-con flex-center icon-grid"
          >
            <Grid.Row>
              <Grid.Column>
                <Label attached="bottom">REACT</Label>
                <Icon name="react" size="huge" />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">Node.js</Label>
                <Icon name="node" size="huge" />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">JavaScript</Label>
                <Icon name="js" size="huge" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Label attached="bottom">Docker</Label>
                <Icon name="docker" size="huge" />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">GitHub</Label>
                <Icon name="git" size="huge" />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">Node package manager</Label>
                <Icon name="npm" size="huge" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Label attached="bottom">NGINX Webserver</Label>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMGPATH +
                    '/2020/svg/brand-icons/nginx.svg'
                  }
                  size="small"
                  alt="nginx-logo"
                  title="nginx-logo"
                />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">GraphQL</Label>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMGPATH +
                    '/2020/svg/brand-icons/graphql.svg'
                  }
                  size="small"
                  alt="graphql-logo"
                  title="graphql-logo"
                />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">Less</Label>
                <Icon name="less" size="huge" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Label attached="bottom">Wordpress</Label>
                <Icon name="wordpress" size="huge" />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">PHP</Label>
                <Icon name="php" size="huge" />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">Sass</Label>
                <Icon name="sass" size="huge" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Container className="ui container material-grid flex-center">
          <Visibility
            onUpdate={(e, {calculations}) => {
              if (
                nginx.calculations.topVisible !== calculations.topVisible ||
                nginx.calculations.bottomVisible !== calculations.bottomVisible
              )
                setNginx({calculations});
            }}
            className="ui material-grid__col--medium--4 flex-base"
          >
            <Transition
              visible={
                nginx.calculations.topVisible ||
                nginx.calculations.bottomVisible
                  ? true
                  : false
              }
              animation="fade"
              duration={
                durationVal[Math.floor(Math.random() * durationVal.length)]
              }
            >
              <div>
                <Header as="h3" className="pixel">
                  UI / UX
                </Header>
                <p>
                  Moderne Front-End Frameworks stellen eine Vielzahl an
                  Interaktionsmöglichkeiten für bzw. mit dem Benutzer bereit
                  ohne den Benutzer dabei zu überfordern oder mit langen
                  Verarbeitungszeiten zu prellen. Hieraus Erfolg einen hohe
                  Kundenzufriedenheit und somit auch Bindung. Dem Benutzer kann
                  jede Art von Service maßgeschneidert Angeboten werden.
                </p>
              </div>
            </Transition>
          </Visibility>

          <Visibility
            onUpdate={(e, {calculations}) => {
              if (
                reactDiv.calculations.topVisible !== calculations.topVisible ||
                reactDiv.calculations.bottomVisible !==
                  calculations.bottomVisible
              )
                setReactDiv({calculations});
            }}
            className="ui material-grid__col--medium--4 flex-base"
          >
            <Transition
              visible={
                reactDiv.calculations.topVisible ||
                reactDiv.calculations.bottomVisible
                  ? true
                  : false
              }
              animation="fade"
              duration={
                durationVal[Math.floor(Math.random() * durationVal.length)]
              }
            >
              <div>
                <Header as="h3" className="pixel">
                  Security
                </Header>
                <p>
                  Auf das Thema Sicherheit muss bei Modernen Webanwendungen ein
                  besonderes Augenmerk gelegt werden. Sowohl Benutzer als auch
                  Betreiber sind potentiell gefährdet. Auf Benutzer Seiten geht
                  es oftmals um Daten als Betreiber muss vor allem die
                  Infrastruktur geschützt werden. Erreicht werden kann ein hohes
                  Maß an Sicherheit nicht in einem Schritt. Es sind viele kleine
                  Schritte die zu gehen sind. Angefangen bei einer guten CSP die
                  beispielsweise vor Phishing Schützt über die Kapselung von
                  Prozessen und dem Schützen der Kundendaten in der Datenbank
                  sind viele Punkte zu beachten.
                </p>
              </div>
            </Transition>
          </Visibility>

          <Visibility
            onUpdate={(e, {calculations}) => {
              if (
                reactSemantic.calculations.topVisible !==
                  calculations.topVisible ||
                reactSemantic.calculations.bottomVisible !==
                  calculations.bottomVisible
              )
                setReactSemantic({calculations});
            }}
            className="ui material-grid__col--medium--3 flex-base"
          >
            <Transition
              visible={
                reactSemantic.calculations.topVisible ||
                reactSemantic.calculations.bottomVisible
                  ? true
                  : false
              }
              animation="fade"
              duration={
                durationVal[Math.floor(Math.random() * durationVal.length)]
              }
            >
              <div>
                <Header as="h3" className="pixel">
                  Flexibilität
                </Header>
                <p>
                  Für jede Art von Webanwendung gibt es eine Vielzahl an
                  Umsetzungsmöglichkeiten. Die richtig zu finden ggf. zu
                  kombinieren und trotzdem die Abhängigkeiten nicht aus dem Auge
                  zu verlieren ist eine der großen Herausforderungen in der
                  modernen Webentwicklung.
                </p>
              </div>
            </Transition>
          </Visibility>

          <Visibility
            onUpdate={(e, {calculations}) => {
              if (
                wordpress.calculations.topVisible !== calculations.topVisible ||
                wordpress.calculations.bottomVisible !==
                  calculations.bottomVisible
              )
                setWordpress({calculations});
            }}
            className="ui material-grid__col--medium--4 flex-base"
          >
            <Transition
              visible={
                wordpress.calculations.topVisible ||
                wordpress.calculations.bottomVisible
                  ? true
                  : false
              }
              animation="fade"
              duration={
                durationVal[Math.floor(Math.random() * durationVal.length)]
              }
            >
              <div>
                <Header as="h3" className="pixel">
                  Zuverlässigkeit
                </Header>
                <p>
                  Das Thema Abhängigkeiten findet sich auch hier wieder. Bereits
                  bei der Entwicklung muss berücksichtigt werden welche Faktoren
                  die Wartung eines Webservices mit sich bringen können und
                  werden. Diese zu meistern ohne den Endbenutzer zu beeinflussen
                  ist eine große Kunst. Zu diesem Zweck finden Moderne Tools wie
                  Git (Versionierung), Jira (Projektmanagement) oder Docker
                  (DevOps) Ihren Platz. Auf diesen Weg können Zuverlässigkeit,
                  Nachvollziehbarkeit und Sicherheit gewährleistet werden und
                  die Entwicklungsziele werden nicht aus dem Auge verloren.
                </p>
              </div>
            </Transition>
          </Visibility>
        </Container>

        <Container className="margin-top border padding-remove" fluid>
          <picture>
            <source
              srcSet={
                process.env.NEXT_PUBLIC_IMGPATH +
                '/2020/04/overview-ci-2020.jpg 1800w'
              }
              media="(min-width: 1800px)"
            />
            <source
              srcSet={
                process.env.NEXT_PUBLIC_IMGPATH +
                '/2020/04/overview-ci-2020-642x300.jpg 650w'
              }
              media="(max-width: 650px)"
            />
            <source
              srcSet={
                process.env.NEXT_PUBLIC_IMGPATH +
                '/2020/04/overview-ci-2020-1536x864.jpg 1200w'
              }
              media="(min-width: 1200px)"
            />
            <Image
              height="auto"
              width="100%"
              src={
                process.env.NEXT_PUBLIC_IMGPATH +
                '/2020/04/overview-ci-2020-768x432.jpg'
              }
              alt="Overview Print & Screen-Design Sample 2020"
              title="Overview Print & Screen-Design Sample 2020"
            />
          </picture>
        </Container>

        <Container className="material-grid flex-center">
          <div
            className="material-grid__col--medium--4 primaryBg flex-con flex-center"
            style={{
              minHeight: '500px',
            }}
          >
            <Header as="h2" className="margin-bottom">
              Print-Design
            </Header>
            <Icon aria-hidden="false" name="file" className="cliped">
              Im Vergleich zum Web-Design entwickeln sich im Print-Design vor
              allem immer wieder Trends die es zu treffen gilt. Die Werkzeug
              hingegen Entwickeln sich etwas langsamer. Blickt man allerdings
              zurück auf unsere Anfänge der jeweiligen Software so haben diese
              mittlerweile eine Fast noch größere Evolution durchgemacht nur
              eben in langsameren Schritten. Auch wenn sich in den letzten
              Jahren gute Alternativen zur&nbsp;
              <a
                href="https://www.adobe.com/de/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Creative Suite
              </a>
              &nbsp; entwickelt haben, setzte ich immer noch hauptsächlich auf
              diese. Das liegt vornehmlich daran das man mit und an dieser
              Software gewachsen ist. Im 3D Bereich vertraue ich der Open Source
              Lösung Blender, auch diese hat über die Jahre einiges an Evolution
              mit gemacht. Und zu letzt mit dem Sprung auf 2.8 eine
              Quantensprung erzielt. Auch wenn Blender mit Sicherheit weiterhin
              nicht als Branchen Primus gilt, so lebt es von ein sehr lebendigen
              Community die es zu einem mächtigen Werkzeug hat wachsen lassen.
            </Icon>
          </div>

          <Grid
            centered
            columns="equal"
            style={{minHeight: '500px'}}
            className="material-grid__col--medium--7 labeledIconGrid ui segment flex-con flex-center icon-grid"
          >
            <Grid.Row>
              <Grid.Column>
                <Label attached="bottom">Adobe Acrobat Pro</Label>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMGPATH +
                    '/2020/svg/brand-icons/acrobat_pro_white.svg'
                  }
                  size="small"
                  alt="acrobat-logo"
                  title="acrobat-logo"
                />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">Adobe Photoshop</Label>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMGPATH +
                    '/2020/svg/brand-icons/adobe_photoshop_white.svg'
                  }
                  size="small"
                  alt="photoshop-logo"
                  title="photoshop-logo"
                />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">Adobe Illustrator</Label>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMGPATH +
                    '/2020/svg/brand-icons/adobe_illustrator_white.svg'
                  }
                  size="small"
                  alt="illustrator-logo"
                  title="illustrator-logo"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Label attached="bottom">Adobe After Effects</Label>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMGPATH +
                    '/2020/svg/brand-icons/adobe_after_effects_white.svg'
                  }
                  size="small"
                  alt="after-effects-logo"
                  title="after-effects-logo"
                />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">Adobe InDesign</Label>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMGPATH +
                    '/2020/svg/brand-icons/adobe_indesign_white.svg'
                  }
                  size="small"
                  alt="indesign-logo"
                  title="indesign-logo"
                />
              </Grid.Column>
              <Grid.Column>
                <Label attached="bottom">Blender</Label>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_IMGPATH +
                    '/2020/svg/brand-icons/blender_logo_white.svg'
                  }
                  size="small"
                  alt="blender-logo"
                  title="blender-logo"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  };

  return <React.Fragment>{renderCustomPost()}</React.Fragment>;
}
