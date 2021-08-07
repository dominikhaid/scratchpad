import React from 'react';
import DefaultUserBox from 'components/Elements/Cards/DefaultUserBox';
import DefaultH1 from 'components/Elements/Titles/DefaultH1';
import PropTypes from 'prop-types';
import Head from 'next/head';

/**
 * @desc index page
 * @returns react component
 */
export default function Index({appState}) {
  Index.propTypes = {
    appState: PropTypes.object,
  };

  return (
    <>
      <style global jsx>{``}</style>
      <Head>
        <title>Next.js Index</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="The Bike Shop" key="title" />
      </Head>
      <section className="px-none primary-gradient">
        <div className="feature-next  border-b-2  mt-none border-secondary  sm:py-none sm:px-none md:py-6xl md:px-2xl lg:py-6xl lg:px-2xl xl:py-6xl xl:px-2xl relative grid place-content-center">
          <DefaultH1
            className="gird-none lg:pl-4xl xl:pl-4xl text-center xl:text-6xl lg:text-6xl"
            title={'Next.js Server'}
          />
        </div>
        <div className="dev-box sm:px-none md:px-2xllg:px-2xl xl:px-2xl relative grid place-content-center">
          <DefaultUserBox
            size={50}
            className="bg-white"
            link={'https://dominikhaid.de'}
            title={'Dominik Haid | Developer'}
            alt="Dominik Haid"
            src={`/images/dominikhaid.jpg`}
            content={'Happy Codeing :)'}
          />
        </div>
      </section>
    </>
  );
}

// export async function getStaticProps(context) {
//   const url = `${process.env.NEXT_PUBLIC_API}/api/products/${context.params.productCode}`;
//   const response = await fetch(url, {
//     method: 'GET',
//     mode: 'same-origin',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer',
//   });

//   const data = await response.json();

//   return {
//     props: {
//       products: data.success ? [data.success] : false,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const url = `${process.env.NEXT_PUBLIC_API}/api/products`;
//   const response = await fetch(url, {
//     method: 'GET',
//     mode: 'same-origin',
//     cache: 'no-cache',
//     credentals: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     redirect: 'follow',
//     referrerPolicy: 'no-referrer',
//   });

//   const data = await response.json();

//   const paths = data.success
//     ? data.success.map(el => ({
//         params: {
//           productCode: el.productCode,
//         },
//       }))
//     : [];

//   return {
//     paths,
//     fallback: false,
//   };
// }
