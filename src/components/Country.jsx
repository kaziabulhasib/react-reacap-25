import { useState } from "react";

const Country = ({ country, handleVisitedCountries }) => {
  const { cca3, name, flags } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div
      className={`p-4 border border-slate-400 m-6 ${
        visited ? "bg-amber-100" : "bg-gray-100"
      } `}>
      <h1 className='text-xl font-semibold my-6'>
        Common Name : {name?.common}
      </h1>
      <img src={flags.png} alt='flags' />
      <h4 className='my-4'>Code: {cca3}</h4>
      <button
        className='px-4 py-2 rounded-sm bg-amber-600 my-4 cursor-pointer'
        onClick={() => handleVisitedCountries(country)}>
        Mark as Visited
      </button>{" "}
      <br />
      <button
        onClick={handleVisited}
        className=' px-4 py-2 bg-red-300 hover:bg-red-400 rounded-sm cursor-pointer'>
        {visited ? "visited" : "going"}
      </button>
      <h1
        className={`my-4 ${
          visited ? "text-red-500" : "text-green-600"
        } text-lg font-medium`}>
        {visited
          ? "I have visited this country"
          : "I want to visit this country"}
      </h1>
    </div>
  );
};

export default Country;
