import { useEffect, useState } from 'react';
import CountryThumb from '../Components/CountryThumb';
import axios from 'axios';

export default function RenderCountries({ array, search }) {
  const [Countries, setCountries] = useState([]);

  const [SearchTerms, setSearchTerms] = useState('');
  useEffect(() => {
    setSearchTerms(search);
    console.log(search);
    getCountries();
  }, [search]);
  const getCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      {Countries.slice(0, 12)
        // .filter((e) => {
        //   if (e == '') {
        //     return e;
        //   } else if (e.name.toLowerCase().includes(SearchTerms.toLowerCase())) {
        //     return e;
        //   }
        // })
        .filter((e) => e.name == SearchTerms)
        .map((e) => (
          <CountryThumb props={e} />
        ))}
    </>
  );
}
