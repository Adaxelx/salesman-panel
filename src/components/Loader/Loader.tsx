import React from 'react';

import { flexCenterAll } from 'styles/classes';

import { StyledLoader } from './Loader.styled';
const Loader = () => {
  return (
    <div className={`${flexCenterAll} w-full h-full bg-background`}>
      <StyledLoader
        className="
        loader
        ease-linear
        rounded-full
        border-8 border-t-8 border-base-grays-4
        h-32
        w-32
      "
      ></StyledLoader>
    </div>
  );
};

export default Loader;
