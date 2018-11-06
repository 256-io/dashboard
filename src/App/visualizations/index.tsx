import React from 'react';
import GDP from './gdp';
import PerCapita from './per-capita';
import GDPGrowth from './gdp-growth';
import PerCapitaGrowth from './per-capita-growth';

const styles = {
  display: 'grid',
  gridTemplateColumns: 'repeat( auto-fit, minmax(250px, auto) )',
  gridGap: '4px',
};

const Visualizations = () => {
  return (
    <div style={styles}>
        <GDP/>
        <PerCapita/>
        <GDPGrowth/>
        <PerCapitaGrowth/>
    </div>
  );
};

export default Visualizations;
