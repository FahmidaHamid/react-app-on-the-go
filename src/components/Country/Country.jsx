import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country, visited);
  };

  return (
    <li className={`country-card ${visited && "visited-country"}`}>
      <img src={country.flags.flags.png} alt="" />
      <h4>Name: {country.name.common}</h4>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area},{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </li>
  );
};

export default Country;
<h3>Name: </h3>;
