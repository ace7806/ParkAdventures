import React from 'react'
import { Box,Grid,Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box sx={{width:1,height:50}}>
        
        <Grid container spacing={1} align='center'>
        <Grid item xs={2}>
        <img src="https://nat-parks.web.app/images/logo_white.svg" alt=""/>
            <Typography>Copyright © 2021</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography>Made possible by the National Park Service APIs</Typography>       
        </Grid>
        <Grid item xs>
            <Typography sx={{paddingRight:3}}>For more information about national parks, 
                upcoming park events, anniversaries, and awards, view
                 the National Park Service website.</Typography>
        </Grid>

        </Grid>
        </Box>
    )
}

export default Footer
