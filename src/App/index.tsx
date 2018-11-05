import React, { Fragment } from 'react';
import withState from 'recompose/withState';
import Titles from './titles';
import Visualizations from './visualizations';

interface State {
  data:any;
  setData: Function;
}
interface Props {
  data: any;
}

const App = ({ data, setData }:State) => {
  return (
    <Fragment>
      <Titles/>
      <Visualizations/>
    </Fragment>
  );
};

export default withState('data', 'setData',
                         ({ data }:any) => {
                           return data || {};
                         })(App);
