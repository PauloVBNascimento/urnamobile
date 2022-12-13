import { StatusBar } from 'expo-status-bar';
import firebase from './src/firebaseConnection';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from './src/pages/Inicial';
import Urna from './src/pages/Urna';
import Details from './src/pages/Details';
import Votar from './src/pages/Votar';

const Stack = createStackNavigator()

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen
          name="Inicial"
          component={Inicial}
          options={{
            headerTintColor: "#2e64fe"
          }}>

        </Stack.Screen>
        <Stack.Screen
          name="Urna"
          component={Urna}
          options={{
            headerTintColor: "#2e64fe"
          }}>

        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#2e64fe"
          }}>

        </Stack.Screen>
        <Stack.Screen
          name="Votar"
          component={Votar}
          options={{
            headerTintColor: "#2e64fe"
          }}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

