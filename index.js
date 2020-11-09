/**
 * @format
 */
import codePush from "react-native-code-push";
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME }

AppRegistry.registerComponent(appName, () => codePush(codePushOptions)(App));
