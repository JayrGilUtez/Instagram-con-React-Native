import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ProfileFlatList from './ProfileFlatList'
import { Icon } from '@rneui/base'

export default function Profile() {

  return (
    <View style={styles.container}>

        <View style={styles.profileHeader}>
          <View>
            <View style={{ flexDirection: 'row', width: 414, height: 'auto', justifyContent: 'space-between' }} >
              <Text style={{ fontSize: 30, marginStart: 4 }}>jayr_gil</Text>
              {/* Right top action bar */}
              <View style={{ flexDirection: 'row' }}>
                <Icon name='at' type='material-community' size={30} />
                <Icon name='plus' type='material-community' size={30} />
                <Icon name='menu' type='material-community' size={30} />

              </View>

            </View>

            <View>
              <View style={{ flexDirection: 'row', }}>
                <Icon name='account-circle-outline' type='material-community' size={75} />

                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', }}>

                  <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold' }} >98</Text>
                      <Text>Posts</Text>
                    </View>
                  </View>

                  <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold' }} >214</Text>
                      <Text >Followers</Text>
                    </View>
                  </View>

                  <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold' }} >170</Text>
                      <Text>Following</Text>
                    </View>
                  </View>

                </View>

              </View>

              <Text style={{ fontSize: 20, marginStart: 4 }}>Jayr Gil</Text>


              <View style={{ flexDirection: 'row', width: 414, height: 'auto', marginTop: 8 }} >

                <View style={{ flexDirection: 'row', flex: 1, }} >

                  <View style={styles.profileButton} >
                    <Text>Edit profile</Text>
                  </View>

                  <View style={styles.profileButton} >
                    <Text>Share profile</Text>
                  </View>

                  <View style={styles.addAccountButton} >
                    <Icon name='account-plus-outline' type='material-community' size={30} />
                  </View>

                </View>

              </View>

              <View style={styles.highlightsStories}>

                <View style={{ alignItems: 'center' }}>
                  <Icon name='leaf-circle-outline' type='material-community' size={60} />
                  <Text>Title</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                  <Icon name='leaf-circle-outline' type='material-community' size={60} />
                  <Text>Title</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                  <Icon name='leaf-circle-outline' type='material-community' size={60} />
                  <Text>Title</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                  <Icon name='leaf-circle-outline' type='material-community' size={60} />
                  <Text>Title</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                  <Icon name='plus-circle-outline' type='material-community' size={60} />
                  <Text>New</Text>
                </View>

              </View>

            </View>

          </View>

        </View>


        <ProfileFlatList />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeader: {
    flexDirection: 'row',
    width: 414,
    height: 'auto',
    //backgroundColor: 'orange',
  },
  flatListContainer: {
    width: 414,
    height: 'auto',
    //backgroundColor: 'blue'
  },
  profileButton: {
    width: 150,
    height: 35,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginStart: 4,
    backgroundColor: '#FFFBF5',
  },
  addAccountButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginStart: 4,
    marginEnd: 4,
    backgroundColor: '#FFFBF5',

  },
  highlightsStories: {
    width: 414,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8
    //backgroundColor: '#DFBCB2'

  },

})