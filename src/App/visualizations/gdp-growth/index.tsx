import React from 'react';
import { Consumer } from '../../context';
import { Typography, Card, CardContent, CardHeader, withStyles } from '@material-ui/core';
import styles, { ClassNames } from '../styles';

const GDPGrowth = ({ classes }:{classes:ClassNames}) => {
  return (
    <Consumer>
      {
        ({ gdp }) => {
          const growingBillions = gdp.value * gdp.growthRate / 1e9;
          const growth = gdp.growthRate * 100;
          return (
            <Card className={classes.card} elevation={2} >
              <CardContent className={classes.content} >
                <Typography className={classes.text} variant="h6" >
                  Productivity is Growing
                </Typography>
                  <div>
                    <Typography color="secondary" variant="h2" >
                      ${Number(growingBillions.toPrecision(3))}
                    </Typography>
                  <div style={{ display:'flex', justifyContent:'center', alignItems:'baseline' }} >
                    <Typography color="secondary" component="span" variant="h4" >
                      Billion
                    </Typography>
                  </div>
                </div>
                    <Typography color="secondary" component="span" variant="h4"
                    style={{ whiteSpace:'nowrap' }} >
                    <Typography className={classes.text} variant="h6" style={{ display:'inline' }}>
                      or&nbsp;
                    </Typography>
                    {growth}%
                    </Typography>
                <Typography className={classes.text} variant="h6" >
                  A year
                </Typography>
              </CardContent>
            </Card>
          );
        }
      }
    </Consumer>
  );
};

export default withStyles(styles('/growth.jpg'))(GDPGrowth);
