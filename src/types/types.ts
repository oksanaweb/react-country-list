export interface CountryApi {
  flags: CountryFlag;
  name: CountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}

export interface CountryFlag {
  png: string;
  svg: string;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: CountryNativeName;
}

export interface CountryNativeName {
  [index: string]: CountryApiName | undefined;
}

export interface CountryApiName {
  official: string;
  common: string;
}

export interface Country {
  flags: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}

export type BadgeLabel = "area" | "population";
