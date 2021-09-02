import axios from 'axios';
import Search from './Search';
import { useContext, useEffect, useState } from 'react';

export default function State() {
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
      <Search
        handleSearch={(e) => {
          setSearchTerms(e.target.value);
        }}
      />
      <h1>{SearchTerms}</h1>

      {Countries.filter((e) =>
        e.name.toLowerCase().includes(SearchTerms.toLowerCase())
      ).map((e) => (
        <h4>{e.name}</h4>
      ))}
    </>
  );
}
