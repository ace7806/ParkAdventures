import React from 'react'
import { Paper,Typography,Button } from '@mui/material'
import { Link } from 'react-router-dom';


const MainDesc = (props) => {
    const {contacts,fullName,description}=props.park
    console.log(props);
    return (
        <Paper sx={{height:350,overflow:"auto",backgroundColor:"bisque",opacity:0.9}}>
            <Typography sx={{p:1,fontWeight:600}} variant="h4">{fullName}</Typography>
            <Typography sx={{p:1,fontWeight:600}} variant="body1">{description}</Typography>
            <Typography sx={{p:1,fontWeight:700}} variant="subtitle2">Phone Number: {contacts.phoneNumbers[0].phoneNumber}</Typography>
            <Typography sx={{p:1,fontWeight:700}} variant="subtitle2">Email Adress: {contacts.emailAddresses[0].emailAddress}</Typography>
            <Button variant="outlined" component={Link} to={{pathname:"/webcam",state:props.park}}>more images</Button>
            
        </Paper>
    )
}

export default MainDesc
