import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-6'>Countries</h1>
      <div className='grid grid-cols-3'>
        {countries.map((country) => (
          <Country country={country} key={country.cca3} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
