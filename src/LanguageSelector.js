// LanguageSelector.js
import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="gu">Gujarati</option>
    </select>
  );
};

export default LanguageSelector;
