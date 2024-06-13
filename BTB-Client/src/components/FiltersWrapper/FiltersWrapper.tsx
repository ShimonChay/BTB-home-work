import { FC, useEffect, useState } from "react";
import "./FiltersWrapper.style.css";
import SingleFilter from "../SingleFilter/SingleFilter";
import { FILTERS } from "../../const/filters";
import { Filter, FiltersWrapperPorps } from "./FiltersWrapper.interfaces";

const FiltersWrapper: FC<FiltersWrapperPorps> = ({ updateFilters }) => {
  const [filters, setFilters] = useState<Filter[]>(FILTERS);

  const updateFiltersValue = (technicalName: string, value: string) => {
    setFilters(
      filters.map(filter =>
        filter.technicalName === technicalName
          ? { ...filter, value: value ? `&${technicalName}=${value}` : "" }
          : filter
      )
    );
  };

  useEffect(() => {
    updateFilters(filters.map(filter => filter.value).join(""));
  }, [filters]);

  return (
    <>
      <div className="filtersArea">
        {filters.map((filter, index) => {
          return (
            <div className="singleFilter">
              <SingleFilter
                key={index}
                technicalName={filter.technicalName}
                type={filter.type}
                options={filter.options}
                updateFilters={updateFiltersValue}
              ></SingleFilter>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FiltersWrapper;
