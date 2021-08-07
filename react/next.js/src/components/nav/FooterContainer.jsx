import React, {useEffect} from 'react';
import FooterFeatured from './FooterFeatured';
import FooterLinks from './FooterLinks';

export default function FooterContainer(props) {
  let scrollState = 0;

  const scrollFunction = () => {
    if (document.querySelector('main.scrollBoxY') === null || undefined) return;
    document.querySelector('main.scrollBoxY').addEventListener('scroll', e => {
      scrollNow(e);
    });
  };

  const displayFooter = () => {
    document.querySelector('header').style.height = '0px';
    document.querySelector('footer').style.height = '';
    document.querySelector('footer').style.overflow = '';
  };

  const fullHeight = () => {
    document.querySelector('header').style.height = '0px';
    document.querySelector('footer').style.height = '0px';
    document.querySelector('footer').style.overflow = 'hidden';
    document.querySelector('header').style.overflow = 'hidden';
  };

  const displayHeader = () => {
    document.querySelector('header').style.height = '';
    document.querySelector('header').style.overflow = '';
    document.querySelector('footer').style.height = '0px';
  };

  const scrollNow = e => {
    if (document.querySelector('main.scrollBoxY') === null || undefined) return;

    if (
      scrollState !== e.target.scrollTop &&
      scrollState > e.target.scrollTop
    ) {
      if (e.target.scrollTop <= 50) {
        displayHeader();
      } else if (
        e.target.scrollHeight - e.target.offsetHeight - e.target.scrollTop >=
        150
      ) {
        fullHeight();
      }

      scrollState = e.target.scrollTop;
      document.querySelector('#scrollUp').classList.add('active');
      setTimeout(() => {
        document.querySelector('#scrollUp') &&
          document.querySelector('#scrollUp').classList.remove('active');
      }, 1000);
      return;
    }

    if (
      scrollState !== e.target.scrollTop &&
      scrollState < e.target.scrollTop
    ) {
      if (
        e.target.scrollHeight - e.target.offsetHeight - e.target.scrollTop <=
          50 ||
        e.target.scrollHeight - e.target.offsetHeight - e.target.scrollTop ===
          0 ||
        e.target.scrollHeight -
          e.target.offsetHeight -
          e.target.scrollTop -
          document.querySelector('footer').offsetHeight <=
          50 ||
        e.target.scrollHeight -
          e.target.offsetHeight -
          e.target.scrollTop -
          document.querySelector('footer').offsetHeight <=
          0
      ) {
        displayFooter();
      } else if (
        e.target.scrollHeight - e.target.offsetHeight - e.target.scrollTop >=
        150
      ) {
        fullHeight();
      }

      scrollState = e.target.scrollTop;
      document.querySelector('#scrollDown').classList.add('active');
      setTimeout(() => {
        document.querySelector('#scrollDown') &&
          document.querySelector('#scrollDown').classList.remove('active');
      }, 1000);
      return;
    }
  };

  useEffect(() => {
    if (
      document.querySelector('main.scrollBoxY') !== null &&
      document.querySelector('main.scrollBoxY') !== undefined
    ) {
      document.querySelector('#scrollUp').classList.remove('display-none');
      document.querySelector('#scrollDown').classList.remove('display-none');
      scrollFunction();
    }

    return () => {};
    // eslint-disable-next-line
  }, []);

  return props.menuContext.menuItems ? (
    <React.Fragment>
      <footer className="material-grid material-grid__col--medium--12 felx-center">
        <FooterLinks
          responsiveContext={props.responsiveContext}
          menuContext={props.menuContext}
          className="material-grid material-container"
        />

        <FooterFeatured
          responsiveContext={props.responsiveContext}
          className="material-grid material-container"
        />
      </footer>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <footer className="material-grid material-grid__col--medium--12 felx-center">
        <FooterFeatured
          responsiveContext={props.responsiveContext}
          className="material-grid material-container"
        />
      </footer>
    </React.Fragment>
  );
}
