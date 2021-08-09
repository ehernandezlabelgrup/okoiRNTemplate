import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplashScreen from '../screens/SplashScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return <NavigationContainer >
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation
