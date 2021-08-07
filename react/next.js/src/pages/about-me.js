import React, {Suspense} from 'react';
import {Container} from 'semantic-ui-react';

import MainDimmer from '@/components/loader/MainDimmer';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThreeScene = dynamic(() => import('@/components/three/threeScene.jsx'), {
  ssr: false,
});

export default function Aboutme(props) {
  if (!process.browser) return <></>;
  return (
    <React.Fragment>
      <Head>
        <title>Print & Screen-Design | About me</title>
        <meta
          name="description"
          content="Persöhnliche Informationen über den Betreiber der Website, Dominik Haid. Werdegang, Qualifikationen und Kontakt."
        />
      </Head>
      <Container fluid className="material-grid">
        <Suspense
          fallback={
            <MainDimmer state={true} msg={'Loading 3D Content ~ 3.0mb'} />
          }
        >
          <ThreeScene {...props} />
        </Suspense>
      </Container>
    </React.Fragment>
  );
}
