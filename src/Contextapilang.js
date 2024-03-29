import React from 'react';
import { LanguageProvider } from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import Greeting from './Greeting';
import { Link } from 'react-router-dom';

const Contextapilang = () => {
  return (
    <>   
    <LanguageProvider>
      <div>
        <LanguageSelector />
        <Greeting />
      </div>
    </LanguageProvider>
     <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
    </>
  );
};

export default Contextapilang;
