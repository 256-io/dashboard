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
                <Typography className={classes.text} variant="h6" >
                  Individual Productivity is Growing
                </Typography>
                    <Typography color="secondary" variant="h1" >
                      ${Number(changeInPerCapita.toPrecision(3))}
                    </Typography>
                    <Typography color="secondary" component="span" variant="h4"
                    style={{ whiteSpace:'nowrap' }} >
                      <Typography
                        className={classes.text} variant="h6" style={{ display:'inline' }}>
                        or&nbsp;
                      </Typography>
                       {(perCapitaGrowth * 100).toPrecision(2)}%
                    </Typography>
                <Typography className={classes.text} variant="h6" >
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

export default withStyles(styles('/pcgrowth.jpg'))(PerCapitaGrowth);
