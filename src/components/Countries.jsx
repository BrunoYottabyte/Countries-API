import axios from "axios";
import React, { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const requestCountries = async () => {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(data);
    console.log(data);
  };

  useEffect(() => {
    requestCountries();
  }, []);

  return (
    <main className="px-16 py-20 bg-light-background h-min">
      <section className="grid grid-cols-4 gap-16">
        {countries.length > 0 &&
          countries.map((country, id) => {
            return <Country country={country} key={country.name.common} />;
          })}
      </section>
    </main>
  );
};

export default Countries;
