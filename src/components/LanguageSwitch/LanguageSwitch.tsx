import React from 'react';

import { LanguageType } from 'types';

interface LanguageSwitchProps {
  onClick: () => void;
  language: LanguageType;
}

const bold = (language: LanguageType, activeLanguage: LanguageType) =>
  language === activeLanguage ? 'font-extrabold' : 'font-light';

const LanguageSwitch = ({ onClick, language }: LanguageSwitchProps) => {
  return (
    <div className="flex text-text-base mr-4" onClick={onClick}>
      <span className={`${bold('pl-PL', language)}`}>PL</span>
      <div className="h-6 w-px bg-text-base mx-1"></div>
      <span className={`${bold('en-EN', language)}`}>EN</span>
    </div>
  );
};

export default LanguageSwitch;
