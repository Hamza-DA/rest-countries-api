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
// export const Themes = {
//   light: {
//     background: 'hsl(0, 0%, 98%)',
//     element: 'hsl(0, 0%, 100%)',
//     text: 'hsl(200, 15%, 8%)',
//     shadow: 'hsl(209, 23%, 85%)',
//   },
//   dark: {
//     background: 'hsl(207, 26%, 17%)',
//     element: 'hsl(209, 23%, 22%)',
//     text: 'hsl(0, 0%, 100%)',
//     shadow: 'hsl(209, 23%, 15%)',
//   },
// };
const ThemeContext = createContext(Themes);

export default ThemeContext;
