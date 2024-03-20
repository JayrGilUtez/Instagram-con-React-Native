import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import HomeFlatList from './HomeFlatList.jsx'
import { Icon } from '@rneui/base'


export default function Home() {
    return (
        <View>

            <View style={styles.storiesContainer}>
                <View style={styles.mainUserStoriesContainer}>
                    <Icon name='account-circle' type='material-community' size={70} />
                    <Text>User</Text>

                </View>
                <View style={styles.friendStoriesContainer}>

                    <Icon name='account-circle-outline' type='material-community' size={70} />
                    <Text>Friend</Text>
                </View>

                <View style={styles.friendStoriesContainer}>

                    <Icon name='account-circle-outline' type='material-community' size={70} />
                    <Text>Friend</Text>
                </View>

                <View style={styles.friendStoriesContainer}>

                    <Icon name='account-circle-outline' type='material-community' size={70} />
                    <Text>Friend</Text>
                </View>

                <View style={styles.friendStoriesContainer}>

                    <Icon name='account-circle-outline' type='material-community' size={70} />
                    <Text>Friend</Text>
                </View>

            </View>

            <HomeFlatList />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    storiesContainer: {
        flexDirection: 'row',
        width: 414,
        height: 'auto',
        alignSelf: 'center',
        //backgroundColor: 'aqua',
        marginBottom: 20,

    },
    mainUserStoriesContainer: {
        width: 'auto',
        height: 'auto',
        alignItems: 'center',

        //backgroundColor: 'orange',
    },
    friendStoriesContainer: {
        //backgroundColor:'red',
        alignItems: 'center',

    }
})