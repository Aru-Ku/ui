import { useState, useEffect } from 'react';

const useTheme = () => {
  const [dark, setDark] = useState(true);

  const commonColors = {
    primary: '#0b132b',
    secondary: '#3a506b',
    ternary: '#1c2541',
    base: '#5bc0be',
    shadow: '#696969',
  };

  const theme = {
    colors: {
      ...commonColors,
      font: dark ? '#ffffff' : '#000000',
      bg: dark ? '#0e141b' : '#ffffff',
    },
    bp: {
      sm: css => `@media only screen and (max-width: 480px) {${css}}`,
      mb: css => `@media only screen and (max-width: 768px) {${css}}`,
      lg: css => `@media only screen and (min-width: 769px) and (max-width: 1024px) {${css}}`,
      xl: css => `@media only screen and (min-width: 1025px) {${css}}`,
    },
  };

  const toggle = () => {
    setDark(prev => {
      localStorage.setItem('theme', prev ? `light` : `dark`);
      return !prev;
    });
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || `dark`;
    localStorage.setItem('theme', currentTheme);
    setDark(currentTheme === `dark`);
  }, []);

  return { toggle, theme };
};

export default useTheme;
