import React from 'react';
import DefaultVerticalLinkList from 'components/Elements/Lists/DefaultVerticalLinkList.jsx';
import DefaultCopyright from 'components/Elements/Text/DefaultCopyright';
import PropTypes from 'prop-types';

export default function DefaultFooter({children}) {
  DefaultFooter.propTypes = {
    children: PropTypes.object,
  };

  return (
    <footer className="w-100 max-w-full text-white shadow-inner sm:p-xl md:p-xl  xl:p-6xl lg:p-6xl gradient-primary">
      {children}
      <DefaultVerticalLinkList />
      <DefaultCopyright style={{textAlign: 'center'}} />
    </footer>
  );
}
