import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import HamburgerMenu from 'react-hamburger-menu';
import { useSession } from 'hooks';
import LogoutButton from 'components/user/LogoutButton';
import { func } from 'prop-types';

const Menu = ({ handleModal }) => {
  const [open, setOpen] = useState(false);
  const intl = useIntl();
  const { authenticated } = useSession();

  return (
    <>
      <HamburgerMenu
        isOpen={open}
        menuClicked={() => setOpen(!open)}
        className="hamburger-icon"
        width={20}
        height={15}
        strokeWidth={1}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />

      {open && (
        <div className="menu">
          <ul>
            <li>
              <Link to="about">{intl.formatMessage({ id: 'common.about' })}</Link>
            </li>

            <li>
              <a onClick={handleModal}>{intl.formatMessage({ id: 'common.contact' })}</a>
            </li>

            {authenticated && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

Menu.propTypes = {
  handleModal: func.isRequired
};

export default Menu;
