import { useEffect } from "react";
import { useState } from "react";

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
      <h1 className='text-3xl font-bold text-center my-6'>
        Countries :{countries.length}
      </h1>
    </div>
  );
};

export default Countries;
