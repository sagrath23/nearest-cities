import { type FormEvent, useState, useEffect } from 'react';
import { City } from "../../types";
import { getDistanceFromLatLonInKm } from '../../utils';

interface ListProps {
  values: City[];
}

export const List = ({ values }: ListProps) => {
  const [searchText, setSearchText] = useState('');
  const [filteredValues, setFilteredValues] = useState(values);
  const [nearestValues, setNearestValues] = useState<City[]>([]);
  const handleSearchTextChange = (event: FormEvent<HTMLInputElement>) => setSearchText(event.currentTarget.value);
  const handleOnValueClick = (lat: number, lng: number) => () => {
    setNearestValues(values.filter(({ lat: destLat, lng: destLng }) => (getDistanceFromLatLonInKm(lat, lng, destLat, destLng) <= 10) && (lat !== destLat && lng !== destLng)).slice(0,4));
  };

  useEffect(() => {
    if(searchText.length) {
      setFilteredValues(values.filter((value) => value.name.includes(searchText)));
    } else {
      setFilteredValues(values);
    }
  }, [searchText, values]);

  return (
    <>
      <label htmlFor="search">Find a city</label>
      <input type="text" name="search" placeholder="type a city name" onChange={handleSearchTextChange} />
      <ul data-testid="filtered-elements">
        {filteredValues.map(({ name, lat, lng }) => (
          <li key={`${lat}-${lng}`} onClick={handleOnValueClick(lat, lng)}>{name}</li>
        ))}
      </ul>
      <p>Nearest:</p>
      <ul data-testid="nearest-elements">
        {nearestValues.map(({ name, lat, lng }) => (
          <li key={`${lat}-${lng}`}>{name}</li>
        ))}
      </ul>
    </>
  );
};
