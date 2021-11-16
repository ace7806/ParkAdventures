import React, { Component } from 'react'
import { getActivities,getParksByActivity } from '../../services/nationalServiceAPI'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Parks from './Parks';
import "./Test.css"
import { Grid,Paper} from '@mui/material';


export default class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            activityList : [],
            parks:[],
            stateAbbreviations: [
                'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
                'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
                'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
                'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
                'VT','VI','VA','WA','WV','WI','WY'
               ],
            selectedState: "",
          }
    }

    addParkToList = async(id) => {
            this.state.parks =[]
            const result = await getParksByActivity(id)
            result.forEach(v => {
                v.parks.forEach(park=>this.state.parks.push(park.parkCode))
            }); 
            this.setState({parks:[...this.state.parks]})
    }

    setUp = async() => {
        const activities = await getActivities()
        this.setState({activityList:activities})
        
    }
 
    componentDidMount() {
        this.setUp()      
        }


    render() {
        //all the grid containers are for centering and laying out the components nicely
        return (
            <div>
                
                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
                     <Grid item xs={4}>
                        <Paper sx={{backgroundColor:'white',marginTop:-6}}>
                        <Grid item container spacing={0} direction="row" alignItems="center" justifyContent="center">
                        <Grid item xs={4}>
                            <Autocomplete
                            id="states-search-bar"
                            sx = {{width:200,p:3,}}
                            disablePortal
                            options={this.state.stateAbbreviations}
                            renderInput={(params) => <TextField  {...params} label="Select State" />}
                            onChange={(event, newValue) => {
                                if(newValue!=null)
                                this.setState({selectedState: newValue})
                                this.setState({parks:[...this.state.parks]}) // trigger re-render when changing states while viewing the same activity
                            }}
                            />
                            
                            </Grid>
                        <Grid item xs={8}><Autocomplete
                            id="activities-search-bar"
                            sx = {{width:500,p:3,}}
                            disablePortal
                            options={this.state.activityList}
                            getOptionLabel={option => option.name}
                            renderInput={(params) => <TextField  {...params} label="Select Activity" />}
                            onChange={(event, newValue) => {
                                if(newValue!=null){this.addParkToList(newValue.id)}
                            }}
                            /></Grid>
                        </Grid>
                        
                        
                        </Paper>
                        </Grid>
                </Grid>
                
                
                
               
                
                  <Parks parks = {this.state.parks} selectedState={this.state.selectedState}/>
                
            
            </div>
        )
    }
}

