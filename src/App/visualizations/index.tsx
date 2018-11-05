import React from 'react';
import GDP from './gdp';
import PerCapita from './per-capita';

const styles = {
  display: 'grid',
  gridTemplateColumns: 'repeat( auto-fit, minmax(200px, auto) )',
  gridGap: '4px',

};

const Visualizations = () => {
  return (
    <div style={styles}>
        <GDP/>
        <PerCapita/>
    </div>
  );
};

export default Visualizations;
