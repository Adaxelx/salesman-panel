import React from 'react';

interface SwitchProps {
  toggle: () => void;
  on: boolean;
  className?: string;
}

const onStyle = 'transform translate-x-12';
const offStyle = 'transform translate-x-0';

const Switch = ({ toggle, on, className = '' }: SwitchProps) => {
  return (
    <button
      className={`w-24 h-12 bg-base-white rounded-full flex items-center px-1 ${className}`}
      onClick={toggle}
    >
      <div
        className={`bg-base-grays-4 rounded-full w-10 h-10  transition-transform ${
          on ? onStyle : offStyle
        }`}
      ></div>
    </button>
  );
};

export default Switch;
