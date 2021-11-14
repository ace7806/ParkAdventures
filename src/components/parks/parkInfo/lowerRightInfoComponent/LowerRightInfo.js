import React from 'react'
import { Paper,Typography } from '@mui/material'
import "./LowerRightInfo.css"


const LowerRightInfo = (props) => {
    console.log(props);
    const {cost,description,directionsInfo} = props.entranceFees[0]
    
    return (
        <Paper  sx={{height:500,overflow: 'auto',backgroundColor:"rgb(69, 41, 30)",color:"white",opacity:0.9}} >
            <Typography sx={{p:1,fontWeight:900}} variant="h4">Entrance Fee: ${cost}</Typography>
            <Typography sx={{p:1,fontWeight:700}} variant="body1">{description}</Typography>
            <Typography sx={{p:1,fontWeight:600}} variant="body2">{props.directionsInfo}</Typography>

        </Paper>
    )
}

export default LowerRightInfo
