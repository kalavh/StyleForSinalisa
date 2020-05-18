// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home/Home'
import Login from './src/pages/Login/Login'
import NovoRelatorio from './src/pages/NovoRelatorio/NovoRelatorio'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NovoRelatorio" component={NovoRelatorio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;