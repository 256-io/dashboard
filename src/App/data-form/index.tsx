import React, { Fragment, FormEvent, ChangeEvent } from 'react';
import {
  withStyles,
  Theme,
  CardHeader,
  Card,
  CardContent,
  InputAdornment,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { ContextType } from '../context/default';

const styles = (theme: Theme) => ({
  textField: {
    margin: theme.spacing.unit,
    width: 300,
  },
  card: {
    margin: theme.spacing.unit / 2,
  },
  formGroup: {
    display: 'flex',
    margin: theme.spacing.unit / 2,
    'flex-wrap': 'wrap',
  },
});

const DataForm = ({
  classes,
  setData,
  data,
}: {
  classes: { textField: string; card: string; formGroup: string };
  setData: Function;
  data: ContextType;
}) => {
  const { gdp, population, update } = data;
  return (
    <Fragment>
      <Card className={classes.card}>
        <CardHeader title="GDP" />
        <CardContent>
          <div className={classes.formGroup}>
            <TextField
              variant="outlined"
              className={classes.textField}
              label={'GDP'}
              type="number"
              id="gdp-value-edit"
              value={gdp.value / 1e9}
              InputProps={{
                endAdornment: <InputAdornment position="end">Billion</InputAdornment>,
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  gdp: {
                    ...data.gdp,
                    value: Number(e.target.value) * 1e9,
                  },
                });
              }}
              // helperText="In Billions"
            />
            <TextField
              variant="outlined"
              className={classes.textField}
              label={'Growth Rate'}
              type="number"
              id="gdp-growth-rate-edit"
              value={Number((gdp.growthRate * 100).toPrecision(3))}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  gdp: {
                    ...data.gdp,
                    growthRate: Number(e.target.value) / 100,
                  },
                });
              }}
              // helperText="As a Percentage"
            />
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader title="Population" />
        <CardContent>
          <div className={classes.formGroup}>
            <TextField
              variant="outlined"
              className={classes.textField}
              label={'Population'}
              type="number"
              id="population-value-edit"
              value={population.value}
              onChange={(e) => {
                setData({
                  ...data,
                  population: {
                    ...data.population,
                    value: Number(e.target.value),
                  },
                });
              }}
              // helperText="In Millions"
            />
            <TextField
              variant="outlined"
              className={classes.textField}
              label={'Growth Rate'}
              type="number"
              id="population-growth-rate-edit"
              value={Number((population.growthRate * 100).toPrecision(3))}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  population: {
                    ...data.population,
                    growthRate: Number(e.target.value) / 100,
                  },
                });
              }}
              // helperText="As a Percentage"
            />
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default withStyles(styles)(DataForm);
