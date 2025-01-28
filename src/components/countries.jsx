import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisistedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
  const handleVisitedCountries = (country) => {
    console.log(country.name.common);
    const newVisitedCountry = [...visitedCountries, country];
    setVisistedCountries(newVisitedCountry);
  };
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-6'>Countries</h1>
      <div>
        <h1 className='text-xl text-center font-semibold'>
          Visited Countries: {visitedCountries.length}
        </h1>
        <ul className='flex flex-col justify-center items-center'>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className='grid grid-cols-4'>
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
