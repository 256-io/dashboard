import React, { Fragment } from 'react';
import withState from 'recompose/withState';
import Titles from './titles';
import Visualizations from './visualizations';
import { Provider, defaultData } from './context';

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
      <Provider value={data} >
        <Visualizations/>
      </Provider>
    </Fragment>
  );
};

export default withState('data', 'setData', defaultData)(App);
