import React from 'react';
import { Consumer } from '../../context';
import { Typography, Card, CardContent, CardHeader, withStyles } from '@material-ui/core';
import styles, { ClassNames } from '../styles';

const MiddleIncomeNeed = ({ classes }:{classes:ClassNames}) => {
  return (
    <Consumer>
      {
        ({ gdp, population }) => {
          const middleIncomeGDP = 1025 * population.value;
          const neededForMiddleIncome = middleIncomeGDP - gdp.value;
          const billions = neededForMiddleIncome / 1e9;
          return (
            <Card className={classes.card} elevation={2} >
              <CardContent className={classes.content} >
                <Typography variant="title" >
                  Uganda Needs To Increase Production
                </Typography>
                <Typography color="error" variant="h1" >
                ${Number(billions.toPrecision(3))}
                </Typography>
                <Typography color="error" variant="h3" >
                  Billion
                </Typography>
                <Typography variant="h6" >
                  To Become A Middle Income Country
                </Typography>
              </CardContent>
            </Card>
          );
        }
      }
    </Consumer>
  );
};

export default withStyles(styles)(MiddleIncomeNeed);
