import { createContext } from 'react';
export const Themes = {
  light: {
    background: 'bg-light-background',
    element: 'bg-light-element',
    text: 'text-light-text',
    shadow: 'bg-light-shadow',
  },
  dark: {
    background: 'bg-dark-background',
    element: 'bg-dark-element',
    text: 'text-dark-text',
    shadow: 'bg-dark-shadow',
  },
};

const ThemeContext = createContext(Themes);

export default ThemeContext;
