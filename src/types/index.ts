import { LatLngExpression, LatLngTuple } from "leaflet";

export type CountryCaseType = {
    updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

export type MarkerType = {
    geocode: LatLngTuple;
    popUpData: {
        countryName: string;
        activeCases: number;
        recoveredCases: number;
        deaths: number;
    }
}

export type ContactType = {
  id: string;
  firstName: string;
  lastName: string;
  status: "active" | "inactive"
}

export type ChartTimelineType = "month" | "sixMonths" | "year" | "twoYears" | "all"