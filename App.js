import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/component/Home';
import Main from './src/component/LenghtScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Quantity Measurement app" component={Home} />
        <Stack.Screen name="Unit convertor" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
