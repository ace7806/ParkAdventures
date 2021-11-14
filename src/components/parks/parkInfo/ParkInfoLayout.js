import React from 'react'
import { Grid } from '@mui/material'
import ParkDates from './parkDatesComponent/ParkDates';
import LowerRightInfo from './lowerRightInfoComponent/LowerRightInfo';
import MainDesc from './mainDescriptionComponent/MainDesc';


const ParkInfoLayout = (props) => {
    const {operatingHours,entranceFees,description,fullName,contacts,directionsInfo,id}= props.location.state
    return (
        
            <Grid container  spacing={0}>
                <Grid item xs={2.7}>
                <div class="side">
                        <ParkDates dates = {operatingHours[0]}/>
                        
                    </div>
                </Grid>
                <Grid item xs={6.3} >
                    <img style={{height:720}} target="_top" src={props.location.state.images[0].url} alt="oops"></img>
                        <div class="main">
                        <MainDesc park={props.location.state}/>
                        
                        </div>
                
                </Grid>
                <Grid  item container xs  justifyContent="flex-end" alignItems="flex-end" spacing={0}>
                    
                <Grid item xs={12}>
                    <div class="side">
                        <LowerRightInfo entranceFees = {entranceFees} directionsInfo={directionsInfo}/>
                        
                    </div></Grid>
                
                </Grid>
            </Grid>
    )
}

export default ParkInfoLayout
