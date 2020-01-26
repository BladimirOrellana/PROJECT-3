import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userLocation: { lat: 32, lng: 32 } };
  }
  componentWillMount(props) {
    this.setState({
      userLocation: navigator.geolocation.getCurrentPosition(
        this.renderPosition
      )
    });
  }
  renderPosition(position) {
    return { lat: position.coords.latitude, lng: position.coords.longitude };
  }
  render() {
    return (
      <Map
        google={this.props.google}
        initialCenter={this.state.userLocation}
        zoom={10}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "-----------"
})(MapContainer);
