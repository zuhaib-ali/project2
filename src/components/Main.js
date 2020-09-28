import React from 'react';
import {Grid, Paper, makeStyles} from '@material-ui/core';  // import components
import GlobalData from './GlobalData';
import CountryWise from './CountryWise';

//styling components
const useStyles = makeStyles((theme)=>({   
    global:{
        padding:5,
    },
    countryWise: {
        padding:5
    }
}));

function Main() {
    const classes = useStyles();    //assigning styles to classes.
    return(
        <div style={{padding:'5'}}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper variant='outlined' className={classes.global}>
                        <GlobalData></GlobalData>
                    </Paper>
                    
                </Grid>
                <Grid item xs={9} className={classes.countryWise}>
                    <Paper>
                        <CountryWise></CountryWise>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Main;