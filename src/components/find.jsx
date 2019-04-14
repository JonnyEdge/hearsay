import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { APIKey } from '../../config';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class Find extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: '53.478263',
          lng: '-2.244658',
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: APIKey,
})(Find);
