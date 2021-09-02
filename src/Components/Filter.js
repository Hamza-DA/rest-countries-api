import { useContext } from 'react';
import ThemeContext, { Themes } from './ColorPalette';
function Filter({ handleFilter }) {
  const { Theme } = useContext(ThemeContext);
  const style = Theme == 'light' ? Themes.light : Themes.dark;
  return (
    <>
      <div className={`rounded-md shadow-lg  px-5 ${style.element}`}>
        <select
          onInput={handleFilter}
          className={`px-5 bg-transparent py-5 ${style.text}`}
        >
          <option hidden disabled selected>
            Filter by region
          </option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
          <option value='All'>All</option>
        </select>
      </div>
    </>
  );
}

export default Filter;
