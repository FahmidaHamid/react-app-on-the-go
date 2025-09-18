import { React, use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries({ countriesPromise }) {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country, visited) => {
    //console.log(visitedCountries, country, visited);
    if (visited) {
      const updatedItems = visitedCountries.filter(
        (c) => c.cca3.cca3 !== country.cca3.cca3
      );
      setVisitedCountries(updatedItems);
    } else {
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  };

  //console.log(countries);
  return (
    <div>
      <h1>All the countries I visited ...{visitedCountries.length}</h1>
      <ul>
        {visitedCountries.map((c) => (
          <li key={c.cca3.cca3}>{c.name.common}</li>
        ))}
      </ul>
      <ol className="countries-card">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </ol>
    </div>
  );
}
