import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../Components/ColorPalette';
import { Themes } from '../Components/ColorPalette';

export default function Single({ match }) {
  const [Country, setCountry] = useState({});
  const [ListOfCountries, setListOfCountries] = useState([]);
  const { Theme } = useContext(ThemeContext);
  const style = Theme == 'light' ? Themes.light : Themes.dark;
  useEffect(() => {
    getCountryInfo();
  }, [match]);
  const getCountryInfo = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${match.params.name}`)
      .then(
        (res) =>
          res.data[0].name !== 'Western Sahara' && setCountry(res.data[0])
      )
      .catch((err) => console.log(err));

    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then((res) => setListOfCountries(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <main
        className={`min-h-screen px-8 md:px-24 pb-8 flex flex-col items-start ${style.background}`}
      >
        <Link
          to='/'
          className={`${style.element} ${style.text} flex text-opacity-60 my-6 p-2 mr-3 shadow-lg`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6 mr-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M7 16l-4-4m0 0l4-4m-4 4h18'
            />
          </svg>
          back
        </Link>

        <div className='lg:grid-cols-2 grid-cols-1 grid'>
          <img
            className=' h-96 object-cover'
            src={Country.flag}
            alt={Country.name}
          />
          <div className='py-6 md:p-10'>
            {Country.nativeName && (
              <>
                <h1 className={`mb-4 text-4xl font-bold ${style.text}`}>
                  {Country.name}
                </h1>
                <div className='flex justify-between flex-col lg:flex-row'>
                  <div>
                    <p className={`font-semibold ${style.text} mb-2`}>
                      Native Name :{' '}
                      <span className={`opacity-60 ${style.text}`}>
                        {Country.nativeName}
                      </span>
                    </p>
                    <p className={`font-semibold ${style.text} mb-2`}>
                      Population :{' '}
                      <span className={`opacity-60 ${style.text}`}>
                        {Country.population &&
                          Country.population.toLocaleString()}
                      </span>
                    </p>
                    <p className={`font-semibold ${style.text} mb-2`}>
                      Region :{' '}
                      <span className={`opacity-60 ${style.text}`}>
                        {Country.region}
                      </span>
                    </p>
                    <p className={`font-semibold ${style.text} mb-2`}>
                      Sub Region :{' '}
                      <span className={`opacity-60 ${style.text}`}>
                        {Country.subregion}
                      </span>
                    </p>
                    <p className={`font-semibold ${style.text} mb-2`}>
                      Capital :{' '}
                      <span className={`opacity-60 ${style.text}`}>
                        {Country.capital}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className={`font-semibold ${style.text} mb-1`}>
                      Top Level Domain :{' '}
                      <span className={`opacity-60 ${Country.topLevelDomain}`}>
                        {Country.region}
                      </span>
                    </p>
                    <p className={`font-semibold ${style.text} mb-1`}>
                      Currencies :{' '}
                      <span className={`opacity-60 ${Country.topLevelDomain}`}>
                        {Country.currencies &&
                          Country.currencies.map((e) => `${e.code},`)}
                      </span>
                    </p>
                    <p className={`font-semibold ${style.text} mb-1`}>
                      Languages :{' '}
                      <span className={`opacity-60 ${Country.topLevelDomain}`}>
                        {Country.languages &&
                          Country.languages.map((e) => `${e.name}, `)}
                      </span>
                    </p>
                  </div>
                </div>
                {Country.borders && (
                  <p className={`${style.text} font-semibold`}>
                    Border Countries :
                    {Country.borders &&
                      Country.borders
                        .map((e) =>
                          ListOfCountries.find((a) => a.alpha3Code == e)
                        )
                        .map((b) => {
                          return (
                            b !== undefined && (
                              <Link
                                className={`${style.element} ${style.text} text-opacity-60 inline-block p-2 mr-3 shadow-lg mb-3`}
                                to={`/${b.name}`}
                              >
                                {b.name}
                              </Link>
                            )
                          );
                        })}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
