// Greeting.js
import React from 'react';
import { useLanguage } from './LanguageContext';

const Greeting = () => {
  const { language } = useLanguage();

  const greetings = {
    en: 'Hello',
    hi: 'Namaste',
    gu: 'Gujarati'
  };

  return <h1>{greetings[language]}</h1>;
};

export default Greeting;
