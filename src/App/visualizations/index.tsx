import React, { Fragment } from 'react';
import GDP from './gdp';
import PerCapita from './per-capita';
import GDPGrowth from './gdp-growth';
import PerCapitaGrowth from './per-capita-growth';
import TimeToMiddleIncome from './time-to-middle-income';
import MiddleIncome from './middle-income';

const styles = {
  display: 'grid',
  gridTemplateColumns: 'repeat( auto-fit, minmax(250px, auto) )',
  gridGap: '8px',
};

const Visualizations = () => {
  return (
    <Fragment>
        <GDP/>
        <PerCapita/>
        <GDPGrowth/>
        <PerCapitaGrowth/>
        <MiddleIncome/>
        <TimeToMiddleIncome/>
    </Fragment>
  );
};

export default Visualizations;
