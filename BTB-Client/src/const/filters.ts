import { Filter, FilterType } from "../components/FiltersWrapper/FiltersWrapper.interfaces";

export const FILTERS: Filter[] = [
    {
      technicalName: "status",
      type: FilterType.Dropdown,
      options: ["alive", "dead", "unknown"],
      value: '',
    },
    {
      technicalName: "species",
      type: FilterType.Input,
      value: '',
    },
    {
      technicalName: "type",
      type: FilterType.Input,
      value: '',
    },
    {
      technicalName: "gender",
      type: FilterType.Dropdown,
      options: ["female", "male", "genderless", "unknown"],
      value: '',
    },
  ];