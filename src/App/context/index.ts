import React from 'react';

export const defaultContext = {
  gdp:{
    value:27e9,
    growthRate:0.05,
  },
  population:{
    value:40e6,
    growthRate:0.033,
  },
  target:{
    label:'Lower Middle Income',
    perCapitaValue:1025,
  },
  update:() => {},
};

export const { Provider, Consumer } = React.createContext(defaultContext);
