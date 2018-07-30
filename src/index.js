import './config/ReactotronConfig';
import React from 'react';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import Routes from './routes';

MapboxGL.setAccessToken('pk.eyJ1IjoiY3NvcmxhbmRpIiwiYSI6ImNqanN1eHIwczAwejIzd2xwazg4MDc4OTUifQ.E7SBVt_fFh5kV26b21ipwg');

const App = () => <Routes />;

export default App;
