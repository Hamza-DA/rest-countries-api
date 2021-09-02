import { useContext } from 'react';
import ThemeContext, { Themes } from './ColorPalette';
function Search({ handleSearch, myvalue }) {
  const { Theme } = useContext(ThemeContext);
  const style = Theme == 'light' ? Themes.light : Themes.dark;

  return (
    <>
      <div
        className={`${style.element} rounded-md shadow-lg my-8 px-5 flex items-center`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class={`h-6 w-6 ${style.text} mr-5`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
        <input
          className={`bg-transparent border-none outline-none ${style.text} text-base py-4 pr-11`}
          type='text'
          onChange={handleSearch}
          value={myvalue}
          placeholder='Search for a country ...'
        />
      </div>
    </>
  );
}

export default Search;
