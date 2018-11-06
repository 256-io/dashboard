import React from 'react';
import { Consumer } from '../../context';
import { Typography, Card, CardContent, CardHeader, withStyles } from '@material-ui/core';
import styles, { ClassNames } from '../styles';

const GDPPerCapita = ({ classes }:{classes:ClassNames}) => {
  return (
    <Consumer>
      {
        ({ gdp, population }) => {
          const billions = gdp.value / 1e9;
          const gdppc = gdp.value / population.value;
          return (
            <Card  className={classes.card} elevation={2} >
              <CardContent className={classes.content} >
                <Typography variant="title" >
                  The Average Ugandan Produces
                </Typography>
                <Typography color="primary" variant="h1" >
                ${Number(gdppc.toFixed(0))}
                </Typography>
                <Typography variant="h6" >
                  In Goods and services a year
                </Typography>
              </CardContent>
            </Card>
          );
        }
      }
    </Consumer>
  );
};

export default withStyles(styles)(GDPPerCapita);