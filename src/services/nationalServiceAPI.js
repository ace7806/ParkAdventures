import axios from "axios";

var api_key = 'api_key=qd0XGTZNUNNUz80pWZ3YM73n1407pIXIWPTGI8np'
const api = axios.create({
    baseURL: `https://developer.nps.gov/api/v1/`
  });


export const getActivities = async() => {
    return  (await api.get("/activities?"+ api_key)).data.data
    }

export const getParks = async(arr,selectedState) => {
    if(arr==null){return []}
    return  (await api.get("/parks?"+"parkCode="+arr+"&stateCode="+selectedState+ "&limit="+arr.length+"&"+ api_key)).data.data
    }
    

export const getParksByActivity = async(id) => {
    return  (await api.get("/activities/parks?id="+id+"&" + api_key)).data.data
    }

export const getParkWebcam = async(parkCode) => {
    return (await api.get("/webcams?parkCode="+parkCode+"&"+api_key)).data.data
}
