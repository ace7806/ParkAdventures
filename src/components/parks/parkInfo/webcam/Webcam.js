import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getParkWebcam } from '../../../../services/nationalServiceAPI';
import { useState,useEffect } from 'react';

const Webcam = (props) => {
    const {images,parkCode} = props.location.state
    const [webcams, setWebcams] = useState([]);
    const [count, setCount] = useState(0);


    const setUp = async()=>{
        const result = await getParkWebcam(parkCode)        
        setWebcams(result)   
        console.log(result);     
       }
    useEffect(() => {
        setUp()
        
      }, []);
    return (
        <div>
            <Button variant="contained" component={Link} to={{pathname:"/about",state:props.location.state}}>Park Info</Button>
            <ImageList sx={{ width: 1, height: 1 }} cols={3} >
                
                {webcams.map((webcam) =>{
                    return webcam.images.map(item=>{
                        setCount(count+1)
                        return <ImageListItem key={item.title}>
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                    })} 
                
                    
                )}

                {count==0&&images.map(item=>{
                        return <ImageListItem key={item.title}>
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                    })} 
                
                    
                
            </ImageList>
        </div>
    )
}

export default Webcam
