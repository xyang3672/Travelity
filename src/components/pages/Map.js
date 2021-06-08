import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import "./Map.css"
import NearbyList from "../NearbyList"

const CLIENT_ID = "SGTBFMMZ3WDD4XFTWKG4IVQUPIG530VPKNO0SGGBEZ2Z32BZ"
const CLIENT_SECRET = "ZAZ2ARLP1ATSJQLKQCIZQ1LRBOVWVSLMZT5PYM5TQMXAXZB1"

class Map extends React.Component {

  mapStyles = {        
    height: "100vh",
  };
  
  defaultCenter = {
    lat: 40.730610,
    lng:  -73.935242
  }

  state = {
    locations: []
  };

  componentDidMount() {
    fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&ll=40.730610,-73.935242&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20210607`)
        .then(response => response.json())
        .then(result => result.response.groups[0].items)
        .then(response => 
          this.setState({locations:response})
          );
  }

  render() {
    console.log("")
    return (
        <LoadScript
          googleMapsApiKey='AIzaSyBWlgIpHRXzLbzzWM_ULaCODpcCCGhEntc'>
            <NearbyList locations={this.state.locations}/>
            <GoogleMap locations={this.state.locations}
              mapContainerStyle={this.mapStyles}
              zoom={13}
              center={this.defaultCenter}
            />
        </LoadScript>
  )}
  
}

export default Map;