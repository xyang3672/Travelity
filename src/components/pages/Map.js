import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import "./Map.css"
import NearbyList from "../NearbyList"
const CLIENT_ID = "SGTBFMMZ3WDD4XFTWKG4IVQUPIG530VPKNO0SGGBEZ2Z32BZ"
const CLIENT_SECRET = "ZAZ2ARLP1ATSJQLKQCIZQ1LRBOVWVSLMZT5PYM5TQMXAXZB1"

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null,
      locations: []
    };
    this.getPosition = this.getPosition.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  
  
  getPosition() {
    navigator.geolocation.getCurrentPosition(this.getCoordinates);
  }
  
  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
    fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&ll=${this.state.latitude},${this.state.longitude}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20210607`)
        .then(response => response.json())
        .then(result => result.response.groups[0].items)
        .then(response => 
          this.setState({locations:response})
          );
  }

  mapStyles = {       
    left: "25%",
    height: "100vh",
  };

  render() {
    this.getPosition();
    const userLocation = {
      lat: this.state.latitude,
      lng: this.state.longitude
    }
    return (
        <LoadScript
          googleMapsApiKey='AIzaSyBWlgIpHRXzLbzzWM_ULaCODpcCCGhEntc'>
            <NearbyList locations={this.state.locations}/>
            <GoogleMap locations={this.state.locations}
              mapContainerStyle={this.mapStyles}
              zoom={14}
              center={userLocation}>
                <Marker 
                icon={{
                  path:
                    "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
                  fillColor: "yellow",
                  fillOpacity: 0.9,
                  scale: 2,
                  strokeColor: "gold",
                  strokeWeight: 2,
                }}
                position={userLocation}/>
                {this.state.locations.map(loc => (
                  <Marker 
                    key={loc.venue.id} 
                    position={{
                      lat: loc.venue.location.lat, 
                      lng: loc.venue.location.lng
                      }}
                      onclick= { ()=> {<InfoWindow 
                      position={{
                      lat: loc.venue.location.lat, 
                      lng: loc.venue.location.lng
                      }}>
                        <div>
                          {loc.venue.name}
                        </div>
                      </InfoWindow>}}>
                      </Marker>
                ) ) }
            </ GoogleMap>
            
        </LoadScript>
  )}
  
}

export default Map;