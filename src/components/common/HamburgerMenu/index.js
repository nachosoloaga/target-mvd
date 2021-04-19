import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import HamburgerMenu from 'react-hamburger-menu';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const intl = useIntl();

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
              <Link to="contact">{intl.formatMessage({ id: 'common.contact' })}</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
