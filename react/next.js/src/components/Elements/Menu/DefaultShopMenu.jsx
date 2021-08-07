import React from 'react';
import PropTypes from 'prop-types';
import SignOutIcon from 'public/icons/phosphor-icons/assets/duotone/sign-out-duotone.svg';
import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';
import {logout} from 'src/hooks/token';

export default function DefaultShopMenu({
  user,
  card,
  products,
  updateCard,
  updateState,
  size,
}) {
  DefaultShopMenu.propTypes = {
    user: PropTypes.object,
    card: PropTypes.object,
    products: PropTypes.array,
    updateCard: PropTypes.func,
    updateState: PropTypes.func,
    size: PropTypes.number,
  };

  return (
    <div className="spaced justify-start  lg:justify-end   xl:justify-end   md:min-w-100 xs:min-w-100 lg:min-w-50 xl:min-w-50">
      <DefaultButton
        aria={`sign out`}
        className="small"
        style={{width: '45px', height: '45px'}}
        icon={<SignOutIcon />}
        onClick={() => logout(updateState)}
      />
    </div>
  );
}
