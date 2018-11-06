import React from 'react';

export const defaultData = {
  gdp:{
    value:27e9,
    growthRate:0.05,
  },
  population:{
    value:40e6,
    growthRate:0.033,
  },
};

export const { Provider, Consumer } = React.createContext(defaultData);
