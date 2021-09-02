import { useContext, useEffect, useState } from 'react';
import ThemeContext from './ColorPalette';
import { Themes } from './ColorPalette';

function Header() {
  const { Theme, setTheme } = useContext(ThemeContext);
  const style = Theme == 'light' ? Themes.light : Themes.dark;

  const ThemeToggler = () => {
    Theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <header
        className={`sticky top-0 ${style.background} px-8 md:px-24 py-5 flex items-center justify-between shadow-md z-40`}
      >
        <h1 className={`text-xl md:text-2xl font-bold ${style.text}`}>
          Where in the world?
        </h1>
        <button
          className='flex bg-none outline-none border-none'
          onClick={() => ThemeToggler()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`${style.text} h-6 w-6 mr-2`}
            viewBox='0 0 24 24'
            fill='none'
          >
            {Theme === 'dark' ? (
              <path
                className='stroke-current'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            ) : (
              <path
                className='stroke-current'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            )}
          </svg>
          <p className={`${style.text}`}>
            {Theme == 'dark' ? 'Light Mode' : 'Dark Mode'}
          </p>
        </button>
      </header>
    </>
  );
}
export default Header;
