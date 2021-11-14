import React from 'react'
import { Box,Grid,Typography } from '@mui/material'
import "./NavBar.css" 

const NavBar = () => {
    return (
        <Box sx={{width:1,height:50,backgroundColor:"#131313"}}>
            <Grid container spacing={1} align='center'>
            <Grid item xs={2}>
            <img src="https://nat-parks.web.app/images/logo_white.svg" alt=""/>
            </Grid>
            

            </Grid>
        </Box>
            
       
        
    )
}

export default NavBar
