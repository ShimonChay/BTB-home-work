import { ChangeEvent, FC, useEffect, useState } from "react";
import "./SingleFilter.style.css";
import { FilterType } from "../FiltersWrapper/FiltersWrapper.interfaces";
import useDebounce from "../../hooks/useDebounce/useDebounce";
import { SEARCH_DELAY } from "../../const/global";

interface SingleFilterProps {
  technicalName: string;
  type: FilterType;
  options?: string[];
  updateFilters: (technicalName: string, value: string) => void;
}

const SingleFilter: FC<SingleFilterProps> = ({
  updateFilters,
  technicalName,
  type,
  options,
}) => {
  const [value, setValue] = useState<string>("");
  const debounceValue = useDebounce(SEARCH_DELAY, value);

  useEffect(() => {
    if (type === FilterType.Input) {
      updateFilters(technicalName, debounceValue);
    }
  }, [debounceValue]);

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    if (type !== FilterType.Input) {
      updateFilters(technicalName, inputValue);
    }
  };

  return (
    <div className="filterContainer">
      {type === FilterType.Dropdown && options ? (
        <select className="field" value={value} onChange={handleChange}>
          <option value="">
            {value ? "Clear selection" : `Select ${technicalName}`}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option} className="dropdownOption">
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="field"
          type="text"
          value={value}
          placeholder={`Enter ${technicalName}`}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default SingleFilter;
