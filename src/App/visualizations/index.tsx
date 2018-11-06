import React from 'react';
import GDP from './gdp';
import PerCapita from './per-capita';
import GDPGrowth from './gdp-growth';
import PerCapitaGrowth from './per-capita-growth';
import MiddleIncome from './time-to-middle-income';

const styles = {
  display: 'grid',
  gridTemplateColumns: 'repeat( auto-fit, minmax(250px, auto) )',
  gridGap: '8px',
};

const Visualizations = () => {
  return (
    <div style={styles}>
        <GDP/>
        <PerCapita/>
        <GDPGrowth/>
        <PerCapitaGrowth/>
        <MiddleIncome/>
    </div>
  );
};

export default Visualizations;
