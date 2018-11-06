import React from 'react';
import { Consumer } from '../../context';
import { Typography, Card, CardContent, CardHeader, withStyles } from '@material-ui/core';
import styles, { ClassNames } from '../styles';

const TimeToMiddleIncome = ({ classes }:{classes:ClassNames}) => {
  return (
    <Consumer>
      {
        ({ gdp, population }) => {
          const newGDP = gdp.value * (1 + gdp.growthRate);
          const newPopulation = population.value * (1 + population.growthRate);
          const perCapita = (gdp.value / population.value);
          const newPerCapita = (newGDP / newPopulation);
          const changeInPerCapita = newPerCapita - perCapita;
          const perCapitaGrowthRate = changeInPerCapita / perCapita;
          const yearsToMiddleIncome = Math.log(1025 / perCapita) /
                                      Math.log(1 + perCapitaGrowthRate);
          return (
            <Card className={classes.card} elevation={2} >
              <CardContent className={classes.content} >
                <Typography variant="title" >
                  With current growth rates It will take
                </Typography>
                  <div>
                    <Typography color="error" variant="h1" >
                      {Number(yearsToMiddleIncome.toPrecision(3))}
                    </Typography>
                </div>
                    <Typography color="error" component="span" variant="h4"
                    style={{ whiteSpace:'nowrap' }} >
                      Years
                    </Typography>
                <Typography variant="h6" >
                  To Get To Lower Middle Income Status
                </Typography>
              </CardContent>
            </Card>
          );
        }
      }
    </Consumer>
  );
};

export default withStyles(styles)(TimeToMiddleIncome);
