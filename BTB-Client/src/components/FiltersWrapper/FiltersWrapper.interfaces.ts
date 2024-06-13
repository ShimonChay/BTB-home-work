export enum FilterType {
  Dropdown = 'dropdown',
  Input = 'input'
}

export interface Filter {
  technicalName: string;
  type: FilterType;
  options?: string[];
  value: string;
}

export interface FiltersWrapperPorps {
  updateFilters: (filters: string) => void;
}