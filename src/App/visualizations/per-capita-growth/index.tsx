import React from 'react';
import { Consumer } from '../../context';
import { Typography, Card, CardContent, CardHeader, withStyles } from '@material-ui/core';
import styles, { ClassNames } from '../styles';

const PerCapitaGrowth = ({ classes }:{classes:ClassNames}) => {
  return (
    <Consumer>
      {
        ({ gdp, population }) => {
          const newGDP = gdp.value * (1 + gdp.growthRate);
          const newPopulation = population.value * (1 + population.growthRate);
          const perCapita = (gdp.value / population.value);
          const newPerCapita = (newGDP / newPopulation);
          const changeInPerCapita = newPerCapita - perCapita;
          const perCapitaGrowth = changeInPerCapita / perCapita;
          return (
            <Card className={classes.card} elevation={2} >
              <CardContent className={classes.content} >
                <Typography variant="title" >
                  Individual Productivity is Growing
                </Typography>
                  <div>
                    <Typography color="error" variant="h1" >
                      ${Number(changeInPerCapita.toPrecision(3))}
                    </Typography>
                </div>
                    <Typography color="primary" component="span" variant="h4"
                    style={{ whiteSpace:'nowrap' }} >
                      <Typography variant="h6" style={{ display:'inline' }}>or&nbsp; </Typography>
                       {(perCapitaGrowth * 100).toPrecision(2)}%
                    </Typography>
                <Typography variant="h6" >
                  Per Ugandan, Per Year
                </Typography>
              </CardContent>
            </Card>
          );
        }
      }
    </Consumer>
  );
};

export default withStyles(styles)(PerCapitaGrowth);
