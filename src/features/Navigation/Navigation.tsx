import React, { useState } from 'react';

import ThemeSwitcher from 'features/ThemeSwitcher';
import { HamburgerButton } from 'components';

const openNavStyles = 'translate-x-0';
const closedNavStyles = 'translate-x-full';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} />
      <div
        className={`fixed w-full h-full transform transition z-10 bg-tertiary flex flex-col p-4 pt-12 ${
          isOpen ? openNavStyles : closedNavStyles
        }`}
      >
        <div className="flex ">
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
