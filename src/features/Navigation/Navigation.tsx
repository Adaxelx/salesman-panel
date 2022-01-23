import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import Portal from '@reach/portal';
import { useUser } from 'context/UserContext';
import styled from 'styled-components';

import { LanguageType } from 'types';
import { RoutesLinks } from 'types/router';
import ThemeSwitcher from 'features/ThemeSwitcher';
import { Button, HamburgerButton, LanguageSwitch, Select, SelectOption } from 'components';

const openNavStyles = 'translate-x-0';
const closedNavStyles = 'translate-x-full';

interface NavigationProps {
  toggleLanguage: () => void;
  language: LanguageType;
}

const flexColCenter = `flex flex-col justify-between items-center`;

const NavList = styled.nav`
  width: 300px;
  @media (max-width: 300px) {
    width: 100%;
  }
`;

const navLinks = [
  { children: <FormattedMessage id="navigation.dashboard" />, to: RoutesLinks.Dashboard },
  {
    children: <FormattedMessage id="navigation.customerOpinions" />,
    to: RoutesLinks.CustomerOpinions,
  },
  {
    children: <FormattedMessage id="navigation.orderCategories" />,
    to: RoutesLinks.OrderCategories,
  },
  { children: <FormattedMessage id="navigation.salesQuantity" />, to: RoutesLinks.SalesQuantity },
];

const Navigation = ({ toggleLanguage, language }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    state: { user, activeShop },
    isLoggedIn,
    dispatch,
  } = useUser();

  const intl = useIntl();

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} />
      <Portal>
        <div
          className={`fixed w-full h-full transform top-0 left-0 transition bg-secondary ${flexColCenter} p-4 pt-12 ${
            isOpen ? openNavStyles : closedNavStyles
          }`}
        >
          <div className={`${flexColCenter}`}>
            <div className="flex w-full justify-center mb-4">
              <div className="flex items-center">
                <LanguageSwitch language={language} onClick={toggleLanguage} />
                <ThemeSwitcher />
              </div>
            </div>
            <div className="flex w-full justify-center">
              {isLoggedIn && (
                <Select
                  value={activeShop || ''}
                  onChange={value => {
                    dispatch({ type: 'changeShop', payload: value });
                  }}
                >
                  {user?.shops.map(shop => (
                    <SelectOption key={shop} value={shop}>
                      {shop}
                    </SelectOption>
                  ))}
                </Select>
              )}
            </div>
          </div>
          {isLoggedIn ? (
            <NavList className={`flex flex-col pb-16`}>
              {navLinks.map(props => (
                <NavLink
                  key={props.to}
                  {...props}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl uppercase font-extrabold mb-3 ${
                      isActive ? 'text-primary' : 'text-text-base'
                    }`
                  }
                />
              ))}
            </NavList>
          ) : (
            <div className={`flex flex-col justify-center items-center h-screen pb-28`}>
              <h3 className="text-text-base">
                <FormattedMessage id="navigation.notLoggedIn" />
              </h3>
            </div>
          )}

          {isLoggedIn && (
            <Button
              onClick={() => {
                dispatch({ type: 'logout' });
                setIsOpen(false);
              }}
              variant="secondary"
            >
              {intl.formatMessage({ id: 'navigation.logout' })}
            </Button>
          )}
        </div>
      </Portal>
    </>
  );
};

export default Navigation;
