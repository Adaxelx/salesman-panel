import React, { useState } from 'react';

import { Switch } from 'components';

const Topbar = () => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(prevOn => !prevOn);
  return (
    <div className="h-16 bg-tertiary flex justify-between items-center fixed w-full">
      <Switch on={on} toggle={toggle} />
    </div>
  );
};

export default Topbar;
