import { City } from "../../../types";

interface NearestCityListProps {
  cities: City[];
}

export const NearestCityList = ({ cities }: NearestCityListProps) => (
  <>
    <p>Nearest:</p>
    <ul className="list" data-testid="nearest-elements">
      {cities.map(({ name, lat, lng }) => (
        <li key={`${lat}-${lng}`}>{name}</li>
      ))}
    </ul>
  </>
);
