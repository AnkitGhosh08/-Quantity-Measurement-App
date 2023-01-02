
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/Home';
import Main from './src/component/LenghtScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Quantity Measurement app"
                    component={Home}
                    options={{title:''}}
                />
                <Stack.Screen name="Unit convertor" component={Main}
                 options={{
                    title: 'Measurement',
                    headerStyle: {
                      backgroundColor: '#e00d73',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;