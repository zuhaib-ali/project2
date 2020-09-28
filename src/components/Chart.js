import React from 'react';
import {Paper, Button, Grid} from '@material-ui/core';
import {Bar} from 'react-chartjs-2';


let country, setCountry
export default function ChartFunc() {
  const [countryCases, setCounrtyCases] = React.useState(); //country records.
  [country, setCountry] = React.useState("PK");


  //getting records country wise.
  React.useEffect(()=>{
    async function records(){
      let res = await fetch('https://api.thevirustracker.com/free-api?countryTotal='+country);  // fetching records api.
      setCounrtyCases(await res.json());  //updating records.
    }

    records();  //calling function

  },[country]);

  const state = {
    type:'bar',
    labels: ['Total', 'Active', 'Deaths','Today Deaths', 'Recovered', 'New Cases', 'Serious'],
    datasets: [
      {
        label: 'COVID-19 In '+country,
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4',
          '#FF4500',
          '#C71585'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F',
        '#FF6600',
        '#E0115F'
        ],
        data: [
          countryCases && countryCases.countrydata[0] && countryCases.countrydata[0].total_cases,
          countryCases && countryCases.countrydata[0] && countryCases.countrydata[0].total_active_cases, 
          countryCases && countryCases.countrydata[0] && countryCases.countrydata[0].total_deaths, 
          countryCases && countryCases.countrydata[0] && countryCases.countrydata[0].total_new_deaths_today,
          countryCases && countryCases.countrydata[0] && countryCases.countrydata[0].total_recovered, 
          countryCases && countryCases.countrydata[0] && countryCases.countrydata[0].total_new_cases_today, 
          countryCases && countryCases.countrydata[0] && countryCases.countrydata[0].total_serious_cases]
      }
    ]
  }

    return (
      <div>
        <Bar
          data={state}
          options={{
                scales: {
                    xAxes: [{
                        gridLines: {
                            offsetGridLines: true
                        }
                    }]
                }
            }}
        />
        <br/>
        <Paper variant="outlined">
          <Grid container>
            
            {/* COUNTRIES */}
            <Grid item xs={10}>
              <select id="selectC" class="form-control">
                <option value="PK">Paksitan</option>
                <option value="IN">India</option>
                <option value="AF">Afghanistan</option>
                <option value="US">America</option>
                <option value="BD">Bangladesh</option>
                <option value="CN">China</option>
                <option value="IR">Iran</option>
              </select>
            </Grid>

            {/* COUNTRIES SEND TO API */}
            <Grid item xs={2}>
              <Button variant="contained" color="primary" onClick={()=>{
                setCountry(document.getElementById("selectC").value);
              }}>Select Country</Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
}
