import axios from 'axios';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../Components/ColorPalette';
import { Themes } from '../Components/ColorPalette';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardInfo = styled.div`
  padding: 20px 0;
`;
const Card = styled.div`
  padding: 20px 60px;
  @media (max-width: 375px) {
    padding: 20px 0;
  }
`;
const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export default function Single({ match }) {
  const [Country, setCountry] = useState({});
  const [ListOfCountries, setListOfCountries] = useState([]);
  const { Theme } = useContext(ThemeContext);
  const style = Theme == 'light' ? Themes.light : Themes.dark;
  const Flag = styled.img`
    width: 100%;
    height: 350px;
    object-fit: cover;
    box-shadow: 0 5px 10px ${style.shadow};
  `;
  const Main = styled.main`
    background-color: ${style.background};
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    align-items: start;
    min-height: 100vh;
    @media (max-width: 375px) {
      padding: 0 25px;
    }
  `;
  const H1 = styled.h1`
    font-size: 2rem;
    font-weight: 800;
    color: ${style.text};
  `;
  const P = styled.p`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px 0;
    font-size: 1rem;
    font-weight: 600;
    color: ${style.text};
  `;
  const ALink = styled.a`
    padding: 5px 20px;
    border: 2px solid ${style.element};
    background-color: ${style.element};
    color: ${style.text};
    text-decoration: none;
    margin: 10px 10px 10px 0;
    box-shadow: 0 5px 10px ${style.shadow};
    display: flex;
  `;
  const AButton = styled.button`
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 5px 20px;
    border: 2px solid ${style.element};
    color: ${style.text};
    text-decoration: none;
    box-shadow: 0 5px 10px #f4f4f4;
    background: none;
    margin: 40px 0;
    cursor: pointer;
  `;
  const P60 = styled.p`
    margin-left: 6px;
    font-size: 1rem;
    font-weight: 600;
    color: ${style.text};
    opacity: 0.6;
  `;
  const Svg = styled.svg`
    width: 26px;
    height: 26px;
    color: ${style.text};
    margin-right: 10px;
  `;
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
      <Main>
        <Link to='/'>
          <ALink>
            <Svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
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
            </Svg>
            back
          </ALink>
        </Link>
        <Grid>
          <Flag src={Country.flag} alt={Country.name} />
          <Card>
            <H1>{Country.name}</H1>
            <FlexRow>
              <CardInfo>
                <P>
                  Native Name : <P60>{Country.nativeName}</P60>
                </P>
                <P>
                  Population :{' '}
                  <P60>
                    {Country.population && Country.population.toLocaleString()}
                  </P60>
                </P>
                <P>
                  Region : <P60>{Country.region}</P60>
                </P>
                <P>
                  Sub Region : <P60>{Country.subregion}</P60>
                </P>
                <P>
                  Capital : <P60>{Country.capital}</P60>
                </P>
              </CardInfo>
              <CardInfo>
                <P>
                  Top Level Domain : <P60>{Country.topLevelDomain}</P60>
                </P>
                <P>
                  Currencies :{' '}
                  <P60>
                    {Country.currencies &&
                      Country.currencies.map((e) => e.code)}
                  </P60>
                </P>
                <P>
                  Languages :{' '}
                  <P60>
                    {Country.languages &&
                      Country.languages.map((e) => `${e.name}, `)}
                  </P60>
                </P>
              </CardInfo>
            </FlexRow>
            {Country.borders && (
              <P>
                Border Countries :
                {Country.borders &&
                  Country.borders
                    .map((e) => ListOfCountries.find((a) => a.alpha3Code == e))
                    .map((b) => {
                      return (
                        b !== undefined && (
                          <ALink>
                            <Link to={`/${b.name}`}>{b.name}</Link>
                          </ALink>
                        )
                      );
                    })}
              </P>
            )}
          </Card>
        </Grid>
      </Main>
    </>
  );
}
