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
                <Typography className={classes.text} variant="h6" >
                  Uganda Produces
                </Typography>
                <Typography color="secondary" variant="h1" >
                ${Number(billions.toFixed(1))}
                </Typography>
                <Typography color="secondary" variant="h3" >
                  Billion
                </Typography>
                <Typography className={classes.text} variant="h6" >
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

export default withStyles(styles('/images/gdp.jpg'))(GDP);
