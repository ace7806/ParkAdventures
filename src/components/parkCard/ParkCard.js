import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link,useHistory} from "react-router-dom";

const ParkCard = (props) => {
    const {description,fullName,images} = props.park
    const history = useHistory();
    return (
    
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea component={Link} to={{pathname:"/about", state:props.park }}>
        <CardMedia
          component="img"
          height="300"
          image={images[0].url}
          alt="green iguana"/>
            
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default ParkCard
