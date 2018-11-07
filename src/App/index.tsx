import React, { Fragment } from 'react';
import withState from 'recompose/withState';
import Titles from './titles';
import Visualizations from './visualizations';
import { Provider } from './context';
import { defaultContext } from './context/default';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import yellow from '@material-ui/core/colors/yellow';
import DataForm from './data-form';

interface State {
  data: any;
  setData: Function;
}
interface Props {
  data: any;
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    secondary: {
      main: yellow['A700'],
    },
    type: 'dark',
  },
});

const App = ({ data, setData }: State) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Titles />
      <div className="viz">
        <Provider value={{ ...data }}>
          <Visualizations />
        </Provider>
        <DataForm setData={setData} data={data} />
      </div>
    </MuiThemeProvider>
  );
};

export default withState('data', 'setData', defaultContext)(App);
