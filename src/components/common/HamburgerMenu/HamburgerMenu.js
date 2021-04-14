import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import useSession from 'hooks/useSession';
import HamburgerMenu from 'react-hamburger-menu';
import './hamburger-menu.scss';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { authenticated } = useSession();
  const intl = useIntl();

  return (
    <>
      <HamburgerMenu
        isOpen={open}
        menuClicked={() => setOpen(!open)}
        className="hamburger-icon"
        width={18}
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
            {!authenticated && (
              <li>
                <a href="/sign-up">{intl.formatMessage({ id: 'login.signup' })}</a>
              </li>
            )}

            <li>
              <a href="#">{intl.formatMessage({ id: 'common.about' })}</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
