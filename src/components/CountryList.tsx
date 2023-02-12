import React from "react";
import countries from "../country-data.json";
import { CountryItem } from "./CountryItem";
import { Country } from "../types/types";

interface CountryListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  <h2>Country List</h2>;
  return (
    <ul className="list-group">
      <h2>Country List</h2>
      {countries.map((country) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </ul>
  );
};
