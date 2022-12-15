import { StatusBar } from 'expo-status-bar';
import firebase from './src/firebaseConnection';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from './src/pages/Inicial';
import Urna from './src/pages/Urna';
import Details from './src/pages/Details';
import Votar from './src/pages/Votar';
import Login from './src/pages/Login';
import Agradecimento from './src/pages/Agradecimento';
import Login2 from './src/pages/Login2';

const Stack = createStackNavigator()

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen
          name="Inicial"
          component={Inicial}
          options={{
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: "#2e64fe"
            }
          }}>

        </Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: "#2e64fe"
            }
          }}>

        </Stack.Screen>
        <Stack.Screen
          name="Login2"
          component={Login2}
          options={{
            title: "Login",
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: "#2e64fe"
            }
          }}>

        </Stack.Screen>
        <Stack.Screen
          name="Urna"
          component={Urna}
          options={{
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: "#2e64fe"
            }
          }}>

        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: "#2e64fe"
            }
          }}>

        </Stack.Screen>
        <Stack.Screen
          name="Votar"
          component={Votar}
          options={{
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: "#2e64fe"
            }
          }}>

        </Stack.Screen>

        <Stack.Screen
          name="Agradecimento"
          component={Agradecimento}
          options={{
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold"
            },
            headerStyle: {
              backgroundColor: "#2e64fe"
            }
          }}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

