import React, { Fragment } from 'react';
import Titles from './titles';
import Dials from './dials';
import Visualizations from './visualizations';

const App = () => {
  return (
    <Fragment>
      <Titles/>
      <Dials/>
      <Visualizations/>
    </Fragment>
  );
};
export default App;
