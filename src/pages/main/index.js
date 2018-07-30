import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar, View } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import api from '../../services/api';

import { Container, AnnotationContainer, AnnotationText } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          token: PropTypes.string,
        }),
      }),
    }).isRequired,
  }

  state = {
    locations: [],
  }

  async componentDidMount() {
    try {
      const response = await api.get('/properties', {
        params: {
          latitude: -27.210768,
          longitude: -49.644018,
        },
      });

      this.setState({ locations: response.data });

      console.tron.log(response);
    } catch (err) {
      console.tron.log(err);
    }
  }

  renderLocations = () => (
    this.state.locations.map(location => (
      <MapboxGL.PointAnnotation
        id={location.id.toString()}
        coordinate={[parseFloat(location.longitude), parseFloat(location.latitude)]}
      >
        <AnnotationContainer>
          <AnnotationText>{location.price}</AnnotationText>
        </AnnotationContainer>
        <MapboxGL.Callout title={location.title}/>
      </MapboxGL.PointAnnotation>
    ))
  )

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <MapboxGL.MapView
          centerCoordinate={[-49.6446024, -27.2108001]}
          style={{ flex: 1 }}
          styleURL={MapboxGL.StyleURL.Dark}
        >
          { this.renderLocations() }
        </MapboxGL.MapView>
      </Container>
    );
  }
}
