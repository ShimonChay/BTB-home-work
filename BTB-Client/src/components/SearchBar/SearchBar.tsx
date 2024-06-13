import { ChangeEvent, FC, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.style.css";
import useDebounce from "../../hooks/useDebounce/useDebounce";
import axios from "axios";
import { ICharacter } from "../../types/Character";

interface SearchBarProps {
  updateData: (input: string) => void;
  delay: number;
}

const SearchBar: FC<SearchBarProps> = ({ updateData, delay }) => {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSuggestionClick, setIsSuggestionClick] = useState(false);
  const debounceValue = useDebounce(delay, userInput);

  useEffect(() => {
    if (isSuggestionClick) {
      setIsSuggestionClick(false);
      return;
    }

    if (debounceValue) {
      updateSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [debounceValue]);

  const updateSuggestions = () => {
    const fetchData = async (filter?: string) => {
      const res = await axios.get<{ results: ICharacter[] }>(
        "https://rickandmortyapi.com/api/character" + (filter ? filter : "")
      );
      setSuggestions(
        res.data.results
          .filter((item: ICharacter) =>
            item.name.toLowerCase().includes(userInput.toLowerCase())
          )
          .map(item => item.name)
      );
    };

    fetchData();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setUserInput(input);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setIsSuggestionClick(true);
    setUserInput(suggestion);
    setSuggestions([]);
    updateData(suggestion);
  };

  const handleSearchButton = () => {
    setSuggestions([]);
    updateData(userInput);
  };

  return (
    <div className="search">
      <input
        className="searchInput"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Who are we looking for?"
      ></input>
      <button className="searchButton" onClick={handleSearchButton}>
        <SearchIcon className="icon" />
      </button>
      {suggestions.length > 0 && (
        <ul className="suggestionsList">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestionItem"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
