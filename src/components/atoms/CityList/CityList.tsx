import { City } from "../../../types";

interface CityListProps {
  cities: City[];
  onCityClickHandler: (lat: number, lng: number) => void;
}

export const CityList = ({ cities, onCityClickHandler }: CityListProps) => {
  const handleOnCityClick = (lat: number, lng: number) => () => {
    onCityClickHandler(lat, lng);
  };
  return (
    <ul className="list" data-testid="filtered-elements">
      {cities.map(({ name, lat, lng }) => (
        <li key={`${lat}-${lng}`} onClick={handleOnCityClick(lat, lng)}>{name}</li>
      ))}
    </ul>
  );
};