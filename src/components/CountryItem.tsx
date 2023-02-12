import React from "react";
import { Color } from "../ui/color";
import { Badge } from "./Badge";
import { Country } from "../types/types";

interface CountryProps {
  country: Country;
}

export const CountryItem = ({
  country: { flags, name, capital, region, area, population },
}: CountryProps) => {
  return (
    <li className="list-group-item">
      <div className="row row-cols-6 align-items-center">
        <div className="col">
          <img src={flags} className="img-fluid" alt="CountryFlag" />
        </div>
        <div className="col">{name}</div>
        <div className="col">{capital}</div>
        <div className="col">{region}</div>
        <div className="col">
          <Badge color={Color.PRIMARY} label="area" value={area} />
        </div>
        <div className="col">
          <Badge
            color={Color.SECONDARY}
            label="population"
            value={population}
          />
        </div>
      </div>
    </li>
  );
};
