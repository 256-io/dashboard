import React from 'react';
import { Consumer } from '../../context';
import { Typography, Card, CardContent, CardHeader, withStyles } from '@material-ui/core';
import styles, { ClassNames } from '../styles';

const GDP = ({ classes }:{classes:ClassNames}) => {
  return (
    <Consumer>
      {
        ({ gdp }) => {
          const billions = gdp.value / 1e9;
          return (
            <Card className={classes.card} elevation={2} >
              <CardContent className={classes.content} >
                <Typography variant="title" >
                  Uganda Produces
                </Typography>
                <Typography color="error" variant="h1" >
                ${Number(billions.toFixed(1))}
                </Typography>
                <Typography color="error" variant="h3" >
                  Billion
                </Typography>
                <Typography variant="h6" >
                  In Goods and Services a year
                </Typography>
              </CardContent>
            </Card>
          );
        }
      }
    </Consumer>
  );
};

export default withStyles(styles)(GDP);
