export interface ContextType {
  gdp: {
    value: number;
    growthRate: number;
  };
  population: {
    value: number;
    growthRate: number;
  };
  target: {
    label: string;
    perCapitaValue: number;
  };
  [key: string]: object;
}
export const defaultContext: ContextType = {
  gdp: {
    value: 27e9,
    growthRate: 0.05,
  },
  population: {
    value: 40e6,
    growthRate: 0.033,
  },
  target: {
    label: 'Lower Middle Income',
    perCapitaValue: 1025,
  },
};
