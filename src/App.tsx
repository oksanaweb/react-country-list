import React from "react";
import { CountryList } from "./components/CountryList";
import countries from "./country-data.json";
import { transformCountries } from "./mappers/transformCountries";
import { CountryApi } from "./types/types";
import { Country } from "./types/types";

export const App = () => {
  const transformedCountries = transformCountries(countries);
  return (
    <div className="container">
      <CountryList countries={transformedCountries} />
    </div>
  );
};
