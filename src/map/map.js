import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer,
} from "react-google-maps";

const MapWithAKmlLayer = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 6.9270786, lng: 79.861243 }}
  >
    <KmlLayer
      url= "https://raw.githubusercontent.com/nadunindunil/bus-routes/master/src/kml/bus_map.kml"
      options={{ preserveViewport: true }}
    />
  </GoogleMap>
))

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = { width: '0', height: '0' };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    
    render() {
      return (
        <div>
            <MapWithAKmlLayer
            googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAcBZVGt3vYRkB9bO4CfcifI1dqK72cuwQ&v=3.exp&libraries=geometry,drawing,places"
            loadingElement ={ <div style={{ height: `100%` }} />}
            containerElement= { <div style={{ height: this.state.height }} />}
            mapElement = {<div style={{ height: `100%` }} />}
            />
        </div>
      );
    }
  }
  
  export default Map;