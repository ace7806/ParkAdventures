import React, { Component } from 'react'
import { getActivities,getParksByActivity,getParks } from '../../services/nationalServiceAPI'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Parks from './Parks';
import "./Test.css"


export default class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            activityList : [],
            parks:[]
          }
    }

    addParkToList = async(id) => {
            this.state.parks =[]
            const result = await getParksByActivity(id)
            result.forEach(v => {
                v.parks.forEach(park=>this.state.parks.push(park.parkCode))
            }); 
            this.setState({parks:[...this.state.parks]})
           this.getParksInfo(this.state.parks)
    }


    getParksInfo = async(arr) => {
        const result = await getParks(arr)
    }

    setUp = async() => {
        const activities = await getActivities()
        this.setState({activityList:activities})
        
    }
 
    componentDidMount() {
        this.setUp()      
        }


    render() {
        return (
            <div>
                
                <div class="free-solo-demo">
                    <Autocomplete
                    id="activities-search-bar"
                    sx = {{width:500}}
                    disablePortal
                    options={this.state.activityList}
                    getOptionLabel={option => option.name}
                    renderInput={(params) => <TextField style={{backgroundColor:'white'}} {...params} label="Select Activity" />}
                    onChange={(event, newValue) => {
                        if(newValue!=null){this.addParkToList(newValue.id)}
                    }}
                    />
                </div>
               
                
                  <Parks parks = {this.state.parks}/>
                
            
            </div>
        )
    }
}

