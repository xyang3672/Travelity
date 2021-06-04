import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const Map = () => {

  const mapStyles = {        
    height: "100vh",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: 40.730610,
    lng:  -73.935242
  }

  return (
        <LoadScript
          googleMapsApiKey='AIzaSyBWlgIpHRXzLbzzWM_ULaCODpcCCGhEntc'>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={13}
              center={defaultCenter}
            />
        </LoadScript>
  )
}

export default Map;