import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import MMText from './mmtext';
import MMNumber from './mmnumber'
import MMLabel from './mmLabel'

class MMSample extends Component {
    render() {
      return (
        <div>
           <Grid container spacing={16}>
                <Grid item md={6}>
                    <Paper>
                        <h2> Unicode TextField </h2>
                        <MMText />
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <Paper>
                        <h2> Myanmar Number TextField </h2>
                        <MMNumber />
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <Paper>
                        <h2> Myanmar Number TextField </h2>
                        <MMLabel itext="2018" />
                    </Paper>
                </Grid>
           </Grid>
        </div>
      );
    }
  }
  
export default MMSample;