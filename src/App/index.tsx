import React, { Fragment } from 'react';
import withState from 'recompose/withState';
import Titles from './titles';
import Visualizations from './visualizations';
import { Provider } from './context';
import { defaultContext } from './context/default';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import yellow from '@material-ui/core/colors/yellow';

interface State {
  data:any;
  setData: Function;
}
interface Props {
  data: any;
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette:{
    secondary:{
      main: yellow['A700'],
    },
  },
});

const App = ({ data, setData }:State) => {
  const context = {
    ...data,
    update: setData,
  };
  return (
    <MuiThemeProvider theme={theme}>
      <Titles/>
      <Provider value={context} >
        <Visualizations/>
      </Provider>
    </MuiThemeProvider>
  );
};

export default withState('data', 'setData', defaultContext)(App);
