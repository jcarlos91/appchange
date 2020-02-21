/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate ',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: componentWillReceiveProps has been renamed',
    'Module RCTImageLoader requires',
    'ViewPagerAndroid',
    'RNSketchCanvas',
    'Warning: Failed prop type: Invalid prop',
    'Possible Unhandled Promise',
    'Warning: DatePickerAndroid has been merged'
]);


AppRegistry.registerComponent(appName, () => App);
