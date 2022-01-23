import React from 'react';

import { flexCenterAll } from 'styles/classes';

import { StyledLoader } from './Loader.styled';

export const Spinner = () => (
  <div className={`${flexCenterAll} w-full h-full`}>
    <StyledLoader
      className="
loader
ease-linear
rounded-full
border-8 border-t-8 border-base-grays-4
h-32
w-32
"
    />
  </div>
);

const Loader = () => {
  return (
    <div className={`w-screen h-screen bg-background`}>
      <Spinner />
    </div>
  );
};

export default Loader;
