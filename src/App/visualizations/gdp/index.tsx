import React from 'react';
import { Consumer } from '../../context';
import { Typography, Card, CardContent, CardHeader } from '@material-ui/core';
import './styles.css';

const GDP = () => {
  return (
    <Consumer>
      {
        ({ gdp }) => {
          const billions = gdp.value / 1e9;
          return (
            <Card className="wrapper" elevation={2} >
              <CardContent className="content" >
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

export default GDP;
