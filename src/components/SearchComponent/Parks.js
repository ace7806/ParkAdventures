import React from 'react'
import { useState,useEffect  } from "react";
import ParkCard from '../parkCard/ParkCard'
import { Grid,Button } from '@mui/material'
import { getParks } from '../../services/nationalServiceAPI'


const Parks = (props) => {
    const {parks} = props
    const [parkInfo, setParkInfo] = useState([]);
    const [cards,setCards] = useState([]);
    const loadMoreParks = ()=>{
        setCards([...cards,...parkInfo.splice(10,10)])
        setParkInfo([...parkInfo])
        console.log(parkInfo.length);
        
    }


    const setUp = async()=>{
        const result = await getParks(parks)        
        console.log(result.length);
        setCards([...result.slice(0,10)])
        setParkInfo(result)        
       }
    useEffect(() => {
        setUp()
        
      }, [parks]);
    return (
        
            <Grid container sx={{marginTop:1}} spacing={1} align="center">
                {cards.map(v=>{
                    return  (<Grid item xs={6}> <ParkCard park={v}/> </Grid>)
                })}
                           {parkInfo.length> 10&&<Button sx={{width:1}} onClick={loadMoreParks} variant="text">LOAD MORE PARKS</Button>}

            </Grid>
        
    )
}

export default Parks
