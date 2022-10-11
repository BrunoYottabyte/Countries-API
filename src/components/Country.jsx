import React from "react";

const Country = ({ country }) => {
  return (
    <article className="bg-white shadow-sm rounded-md overflow-hidden">
      <img
        height={200}
        className="h-[170px] w-full object-cover"
        src={country.flags.png}
        alt={`image do pais...`}
      />

      <div className="p-4">
        <h2 className="text-lg font-bold">{country.name.common}</h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p className="whitespace-nowrap">
          Capital: {country.capital && country.capital[0]}
        </p>
      </div>
    </article>
  );
};

export default Country;
