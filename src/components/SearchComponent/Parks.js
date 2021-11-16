import React from 'react'
import { useState,useEffect  } from "react";
import ParkCard from '../parkCard/ParkCard'
import { Grid,Button } from '@mui/material'
import { getParks } from '../../services/nationalServiceAPI'

//we store all the parks at parkInfo but since we want infinite scrolling and
// rendering all of them at the start is extremely slow
//we use the cards array to actively remove the first 10 elements of 
//the parkInfo array and add it to the grid every time we load more parks

const Parks = (props) => {
    const {parks,selectedState} = props
    const [parkInfo, setParkInfo] = useState([]);
    const [cards,setCards] = useState([]);
    const loadMoreParks = ()=>{
        setCards([...cards,...parkInfo.splice(0,10)])
        setParkInfo([...parkInfo])
        console.log(parkInfo.length);
        
    }


    const setUp = async()=>{
        console.log(selectedState);
        const result = await getParks(parks,selectedState)        
        console.log(result.length);
        setCards([...result.splice(0,10)]) //grab the first ten elements and render those cards
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
