import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../../modules/Profile.jsx';
import ImageScreen from '../../modules/ImageScreen.jsx'

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Profile' component={Profile} /> 
        <Stack.Screen name='ImageScreen' component={ImageScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})