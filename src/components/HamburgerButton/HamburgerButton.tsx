import React from 'react';

const bar = 'h-1 w-12 bg-text-base absolute transition';

const topBarOpen = 'transform rotate-45 translate-y-2.5';
const midBarOpen = 'opacity-0';
const bottomBarOpen = 'transform -rotate-45 -translate-y-2.5';

const isOpenStyles = 'bg-base-red';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button className="fixed top-3 right-2 w-12 h-5 z-20" onClick={onClick}>
      <div className={`${bar} top-0 ${isOpen ? `${topBarOpen} ${isOpenStyles}` : ''}`}></div>
      <div className={`${bar} top-1/2 ${isOpen ? midBarOpen : ''}`}></div>
      <div className={`${bar} top-full ${isOpen ? `${bottomBarOpen} ${isOpenStyles}` : ''}`}></div>
    </button>
  );
};

export default HamburgerButton;
