import { CountryItem } from "../components/CountryItem";
import { Country, CountryApi } from "../types/types";
import countries from "../country-data.json";

export const transformCountries = (countries: CountryApi[]): Country[] => {
  return countries.map(({ flags, name, capital, region, area, population }) => {
    return {
      flags: flags.svg,
      name: name.common,
      capital: capital[0],
      region: region,
      area: area,
      population: population,
    };
  });
};
