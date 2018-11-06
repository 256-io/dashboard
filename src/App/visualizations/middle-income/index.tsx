import React from 'react';
import { Consumer } from '../../context';
import { Typography, Card, CardContent, CardHeader, withStyles } from '@material-ui/core';
import styles, { ClassNames } from '../styles';

const MiddleIncomeNeed = ({ classes }:{classes:ClassNames}) => {
  return (
    <Consumer>
      {
        ({ gdp, population, target }) => {
          const middleIncomeGDP = target.perCapitaValue * population.value;
          const neededForMiddleIncome = middleIncomeGDP - gdp.value;
          const billions = neededForMiddleIncome / 1e9;
          return (
            <Card className={classes.card} elevation={2} >
              <CardContent className={classes.content} >
                <Typography className={classes.text} variant="h6" >
                  Uganda Needs To Increase Production
                </Typography>
                <Typography color="secondary" variant="h1" >
                ${Number(billions.toPrecision(3))}
                </Typography>
                <Typography color="secondary" variant="h3" >
                  Billion
                </Typography>
                <Typography className={classes.text} variant="h6" >
                  To Reach <b>{target.label}</b>
                </Typography>
              </CardContent>
            </Card>
          );
        }
      }
    </Consumer>
  );
};

export default withStyles(styles('images/balance.jpg'))(MiddleIncomeNeed);
