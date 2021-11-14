import React from 'react'
import { Typography } from '@mui/material';
import { Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const ParkDates = (props) => {
    const {standardHours,description}= props.dates
    console.log(props.dates);
    return (
        <Paper sx={{height:720, backgroundColor:"rgb(110, 171, 106)",overflow:"auto",color:"white"}}>
            <Button variant="outlined" component={Link} to={{pathname:"/"}}>go back</Button>
            <Typography sx={{p:2,fontWeight:900}} variant="h2">Park Hours</Typography>
            <Typography sx={{p:1}} variant="h6">{description}</Typography>
            <Typography sx={{p:1,fontWeight:900}} variant="subtitle2">Monday:{standardHours.monday}</Typography>
            <Typography sx={{p:1,fontWeight:900}} variant="subtitle2">Tuesday:{standardHours.tuesday}</Typography>
            <Typography sx={{p:1,fontWeight:900}} variant="subtitle2">Wednesday:{standardHours.wednesday}</Typography>
            <Typography sx={{p:1,fontWeight:900}} variant="subtitle2">Thursday:{standardHours.thursday}</Typography>
            <Typography sx={{p:1,fontWeight:900}} variant="subtitle2">Friday:{standardHours.friday}</Typography>
            <Typography sx={{p:1,fontWeight:900}} variant="subtitle2">Saturday:{standardHours.saturday}</Typography>
            <Typography sx={{p:1,fontWeight:900}} variant="subtitle2">Sunday:{standardHours.sunday}</Typography>
            
            
            
            
        </Paper>
    )
}

export default ParkDates
