import React from 'react';

import ThemeSwitcher from 'features/ThemeSwitcher';

const Topbar = () => {
  return (
    <div className="h-16 bg-tertiary flex justify-between items-center fixed w-full">
      <ThemeSwitcher />
    </div>
  );
};

export default Topbar;
