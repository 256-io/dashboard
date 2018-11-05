import React from 'react';
import { Consumer } from '../../context';
import { Typography, Card, CardContent, CardHeader, withStyles } from '@material-ui/core';

const styles = () => ({
  content: {
    'text-align':'center',
  },
});
interface Classes {
  content:string;
}

const GDP = ({ classes }:{classes:Classes}) => {
  return (
    <Consumer>
      {
        ({ gdp }) => {
          const billions = gdp.value / 1e9;
          return (
            <Card elevation={2} >
              <CardContent className={classes.content} >
                <Typography variant="title" >
                  Uganda's Produces
                </Typography>
                <Typography color="error" variant="h1" >
                ${Number(billions.toFixed(1))}
                </Typography>
                <Typography color="error" variant="h3" >
                  Billion
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

export default withStyles(styles)(GDP);
