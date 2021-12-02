import React, { useEffect, useState } from 'react';

import { ReactComponent as MoonIcon } from 'assets/moon.svg';
import { ReactComponent as SunIcon } from 'assets/sun.svg';
import { IconWrapper, Switch } from 'components';

const ThemeSwitcher = () => {
  const [on, setOn] = useState(!window.matchMedia('(prefers-color-scheme: dark)').matches);
  const toggle = () => setOn(prevOn => !prevOn);

  useEffect(() => {
    document.body.dataset.theme = on ? 'light' : 'dark';
  }, [on]);

  return (
    <div className="flex items-center justify-between">
      <IconWrapper>
        <SunIcon />
      </IconWrapper>
      <Switch on={on} toggle={toggle} className="mx-2" />
      <IconWrapper>
        <MoonIcon />
      </IconWrapper>
    </div>
  );
};

export default ThemeSwitcher;
