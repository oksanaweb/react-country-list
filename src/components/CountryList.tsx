import React from "react";
import countries from "../country-data.json";
import { CountryItem } from "./CountryItem";
import { Country } from "../types/types";

interface CountryListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul className="list-group">
      {countries.map((country) => (
        <CountryItem country={country} key={country.name} />
      ))}
    </ul>
  );
};
