import React from 'react';
import SignOutIcon from 'public/icons/phosphor-icons/assets/duotone/sign-out-duotone.svg';
import {logout} from 'src/hooks/token';
import DefaultButton from 'components/Elements/Buttons/DefaultButton.jsx';
import ResultBox from 'components/Elements/Results/DefaultResult';
import SmileOutlined from 'public/icons/phosphor-icons/assets/duotone/smiley-duotone.svg';
import PropTypes from 'prop-types';

export default function UserLocked({user, updateCard}) {
  UserLocked.propTypes = {
    user: PropTypes.object,
    updateCard: PropTypes.func,
  };

  return (
    <ResultBox
      className="text-secondary shadow-lg bg-white"
      icon={<SmileOutlined className="animate-popIn" />}
      title="Oooops!"
    >
      <p>
        We are sorry something with your account seems to be wrong! Please
        contact&nbsp;
        <a
          href="mailto:info@dominikhaid.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          us
        </a>
        .
      </p>
      <DefaultButton
        type="secondary"
        aria="sign out"
        title="Sign out"
        className="flex-auto px-xs lg:px-lg flex-grow-0 xs:mx-none my-xs sm:ml-none md:ml-lg lg:ml-lg xl:ml-lg "
        icon={
          <SignOutIcon
            className="button inline fill-current lg:pr-lg pr-xs"
            style={{width: '45px', height: '45px'}}
          />
        }
        onClick={() => logout(updateCard)}
      />
    </ResultBox>
  );
}
