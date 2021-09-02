// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ThemeContext from '../Components/ColorPalette';
import { Themes } from '../Components/ColorPalette';
import { useContext } from 'react';

export default function CountryThumb({ props }) {
  const { Theme } = useContext(ThemeContext);
  const style = Theme == 'light' ? Themes.light : Themes.dark;

  return (
    <>
      <Link to={`/${props.name}`} className='w-full'>
        <div
          className={`flex flex-col w-full ${style.element} shadow-lg rounded-lg overflow-hidden`}
        >
          <img
            className='object-cover h-40'
            src={props.flag}
            alt={props.name}
          />
          <div className='px-4 py-6'>
            <h1 className={`text-xl font-bold mb-2 ${style.text}`}>
              {props.name}
            </h1>
            <div>
              <p className={style.text}>
                Population :{' '}
                <span className={`opacity-60 ${style.text}`}>
                  {props.population.toLocaleString()}
                </span>
              </p>
              <p className={style.text}>
                Regions :{' '}
                <span className={`opacity-60 ${style.text}`}>
                  {props.region}
                </span>
              </p>
              <p className={style.text}>
                Capital :{' '}
                <span className={`opacity-60 ${style.text}`}>
                  {props.capital}
                </span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
