import { ChangeEventHandler } from "react";

interface SearchInputProps {
  handleSearchTextChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput = ({ handleSearchTextChange }: SearchInputProps) => (
  <>
    <label htmlFor="search">Find a city:</label>
    <input type="text" name="search" placeholder="type a city name" onChange={handleSearchTextChange} />
  </>
);
