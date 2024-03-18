import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ImageScreen from '../../modules/ImageScreen.jsx'
import Explore from '../../modules/Explore.jsx'

const Stack = createStackNavigator();

export default function ExploreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Explore' component={Explore} />
      <Stack.Screen name='ImageScreen' component={ImageScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})