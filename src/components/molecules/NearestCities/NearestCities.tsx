import './NearestCities.css';
import { type FormEvent, useState, useEffect } from 'react';
import { City } from "../../../types";
import { getDistanceFromLatLonInKm } from '../../../utils';
import { CityList, NearestCityList, SearchInput } from '../../atoms';


interface ListProps {
  cities: City[];
}

export const NearestCities = ({ cities }: ListProps) => {
  const [searchText, setSearchText] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [nearestCities, setNearestCities] = useState<City[]>([]);
  const handleSearchTextChange = (event: FormEvent<HTMLInputElement>) => setSearchText(event.currentTarget.value);
  const handleOnValueClick = (lat: number, lng: number) => {
    setNearestCities(cities.filter(({ lat: destLat, lng: destLng }) => (getDistanceFromLatLonInKm(lat, lng, destLat, destLng) <= 10) && (lat !== destLat && lng !== destLng)).slice(0,4));
  };

  useEffect(() => {
    if(searchText.length) {
      setFilteredCities(cities.filter(({ name }) => name.includes(searchText)));
    } else {
      setFilteredCities(cities);
    }
  }, [searchText, cities]);

  return (
    <>
      <SearchInput handleSearchTextChange={handleSearchTextChange}/>
      <CityList cities={filteredCities} onCityClickHandler={handleOnValueClick} />
      <NearestCityList cities={nearestCities} />
    </>
  );
};
