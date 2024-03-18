import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExploreFlatList from './ExploreFlatList.jsx'
import { Icon } from '@rneui/base';


export default function Explore() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name='magnify' type='material-community' size={24} />
        <Text style={{fontSize:16}}>Search</Text>


      </View>
      <ExploreFlatList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    flexDirection: 'row',
    width: 414,
    height:30,
    alignItems:'center',
    borderRadius: 8,
    marginVertical:5,
    backgroundColor: '#FFFBF5',


  }
})