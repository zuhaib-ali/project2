import React from 'react';
import {Paper} from '@material-ui/core';
import ChartFunc from './Chart';

function CountryWise() {
    return (
        <div>
            <Paper style={{padding:'10px'}} variant="outlined">
                <ChartFunc></ChartFunc>
            </Paper>
        </div>
    );
}

export default CountryWise;