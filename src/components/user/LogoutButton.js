import React from 'react';
import { FormattedMessage } from 'react-intl';

import useDispatch from 'hooks/useDispatch';
import { logout } from 'state/actions/userActions';

const LogoutButton = () => {
  const logoutRequest = useDispatch(logout);

  return (
    <a className="cursor-pointer" onClick={logoutRequest}>
      <FormattedMessage id="logout.button" />
    </a>
  );
};

export default LogoutButton;
