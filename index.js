/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppIndex from './App'
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import configureStore from './src/core_module/config/store'
import DoctorsList from './src/containers/DoctorsList'

const store = configureStore()

const App = () => (
        <Provider store={store}>
            <DoctorsList />
        </Provider>
)

AppRegistry.registerComponent(appName, () => App);
