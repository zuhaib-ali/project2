import React from 'react';
import {Paper, makeStyles, Typography} from '@material-ui/core';    //importing components.
import NumberFormat from 'react-number-format';

//styling components.
const useStyles = makeStyles((theme)=>({    
    item:{
        textAlign:"center",
        margin:5,
        lineHeight:4
    }
}));

function GlobalData() {
    const [cases, setCases] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const classes = useStyles();    //assigning styles.

    // getting data, everytime updated.
    React.useEffect(()=>{
        async function covid19() {
            setLoading(true);   //data is loading
            const response = await fetch('https://api.thevirustracker.com/free-api?global=stats');  //virus api fetching
            const data = await response.json();   // getting json response.
            setCases(data); //updating data.
            setLoading(false); //data loaded.
        }
        covid19();  //calling api function.
    },[]);

    if(loading){
        return <h1 style={{textAlign:'center'}}>Loading Data</h1>
    }

    return(
        <div>
            <Paper className={classes.item} style={{backgroundColor:'yellow'}}>
                <Typography variant="h6">
                    Globally Data
                </Typography>
            </Paper>
            <br/>

            <Paper className={classes.item} style={{backgroundColor:'#B21F00', color:'white', fontWeight:'bold'}}>                
                <Typography variant="h4">
                    <NumberFormat value={cases && cases.results && cases.results[0].total_cases} displayType={"text"} thousandSeparator={true}></NumberFormat>
                </Typography>
                <Typography variant="body">
                    Total Cases
                </Typography>
            </Paper>

            <br/>

            <Paper className={classes.item} style={{backgroundColor:'#C9DE00', color:'white', fontWeight:'bold'}}>
                <Typography variant="h4">
                <NumberFormat value={cases && cases.results && cases.results[0].total_active_cases} displayType={"text"} thousandSeparator={true}></NumberFormat>
                </Typography>
                <Typography variant="body">
                    Total Active
                </Typography>
            </Paper>

            <br/>

            <Paper className={classes.item} style={{backgroundColor:'#2FDE00', color:'white', fontWeight:'bold'}}>
                <Typography variant="h4">
                <NumberFormat value={cases && cases.results && cases.results[0].total_deaths} displayType={"text"} thousandSeparator={true}></NumberFormat>
                </Typography>
                <Typography variant="body">
                    Total Deaths
                </Typography>
            </Paper>
            
            <br/>
            <Paper className={classes.item} style={{backgroundColor:'#6800B4', color:'white', fontWeight:'bold'}}>
                <Typography variant="h4">
                    <NumberFormat value={cases && cases.results && cases.results[0].total_recovered} displayType={"text"} thousandSeparator={true}></NumberFormat>
                </Typography>
                <Typography variant="body">
                    Total Recovered
                </Typography>
            </Paper>
        </div>
    );
}

export default GlobalData;