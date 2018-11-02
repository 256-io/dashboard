import React, { Fragment } from 'react';
import withState from 'recompose/withState';
import Titles from './titles';
import Dials from './dials';
import Visualizations from './visualizations';

interface State {
  data:object;
  setData: Function;
}
interface Props {
  data: object;
}

const App = ({ data, setData }:State) => {
  return (
    <Fragment>
      <Titles/>
      <Dials value={data} onChange={setData} />
      <Visualizations/>
    </Fragment>
  );
};

export default withState('data', 'setData',
                         ({ data }:any) => {
                           return data || {};
                         })(App);
