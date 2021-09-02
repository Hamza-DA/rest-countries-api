import axios from 'axios';
import Search from '../Components/Search';
import Filter from '../Components/Filter';
import CountryThumb from '../Components/CountryThumb';
import ThemeContext, { Themes } from '../Components/ColorPalette';
import { useContext, useEffect, useState } from 'react';

export default function State() {
  const { Theme } = useContext(ThemeContext);
  const style = Theme == 'light' ? Themes.light : Themes.dark;
  const [FilterTerms, setFilterTerms] = useState('');
  const [Countries, setCountries] = useState([]);
  const [SearchTerms, setSearchTerms] = useState('');
  useEffect(() => {
    getCountries();
  }, []);
  const getCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <main
        className={`min-h-screen px-8 md:px-24 pb-8 flex flex-col items-start ${style.background}`}
      >
        <div className='flex w-full items-center justify-between'>
          <Search
            handleSearch={(e) => {
              setSearchTerms(e.target.value);
            }}
          />
          <Filter
            handleFilter={(e) => {
              e.target.value == 'All'
                ? setFilterTerms('')
                : setFilterTerms(e.target.value);
            }}
          />
        </div>
        <section className='grid auto-rows-auto grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-0 lg:gap-16 gap-y-14 w-full'>
          {Countries.filter((e) =>
            FilterTerms !== '' ? e.region == FilterTerms : e
          )
            .filter((e) =>
              e.name.toLowerCase().includes(SearchTerms.toLowerCase())
            )

            .map((e) => (
              <CountryThumb props={e} />
            ))}
        </section>
      </main>
    </>
  );
}
