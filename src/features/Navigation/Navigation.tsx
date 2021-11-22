import React, { useState } from 'react';

import { LanguageType } from 'types';
import ThemeSwitcher from 'features/ThemeSwitcher';
import { HamburgerButton, LanguageSwitch } from 'components';

const openNavStyles = 'translate-x-0';
const closedNavStyles = 'translate-x-full';

interface NavigationProps {
  toggleLanguage: () => void;
  language: LanguageType;
}

const Navigation = ({ toggleLanguage, language }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} />
      <div
        className={`fixed w-full h-full transform transition z-10 bg-secondary flex flex-col p-4 pt-12 ${
          isOpen ? openNavStyles : closedNavStyles
        }`}
      >
        <div className="flex">
          <div className="flex items-center">
            <LanguageSwitch language={language} onClick={toggleLanguage} />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
