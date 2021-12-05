import React, { useEffect, useState } from 'react';

import { themeKey } from 'constants/localStorageKeys';
import { ReactComponent as MoonIcon } from 'assets/moon.svg';
import { ReactComponent as SunIcon } from 'assets/sun.svg';
import { IconWrapper, Switch } from 'components';

const setInitialState = () => {
  const localColor = localStorage.getItem(themeKey);

  return localColor
    ? localColor === 'dark'
    : !window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const ThemeSwitcher = () => {
  const [on, setOn] = useState(() => setInitialState());
  const toggle = () => setOn(prevOn => !prevOn);

  useEffect(() => {
    const color = on ? 'dark' : 'light';
    document.body.dataset.theme = color;
    localStorage.setItem(themeKey, color);
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
