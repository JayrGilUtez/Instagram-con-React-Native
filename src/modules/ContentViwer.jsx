import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'

export default function ContentViwer(props) {
    const { userName, source, description } = props
    return (
        <View style={styles.container}>
            <View style={styles.contentHeaderContainer}>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                >
                    <Icon name='account-circle-outline' type='material-community' size={40} style={{ marginEnd: 3 }} />
                    <Text>{userName}</Text>
                </View>
                <View
                    style={{ width: 'auto', height: 'auto' }}
                >
                    <Icon name='dots-horizontal' type='material-community' size={30} style={{ marginEnd: 3 }} />

                </View>
            </View>

            <Image source={source} style={styles.image} />

            <View style={styles.actionBar}>

                <View style={styles.likeCommentShare}>
                    <Icon name='heart-outline' type='material-community' size={40} />
                    <Icon name='comment-outline' type='material-community' size={40} />
                    <Icon name='send-outline' type='material-community' size={40} />
                </View>

                <View style={styles.saveIcon}>
                    <Icon name='bookmark-outline' type='material-community' size={40} />
                </View>

            </View>

            <View style={styles.descriptionContainer}>
                <Text>{description}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    image: {
        width: 414,
        height: 300,
        borderRadius: 0,
    },
    contentHeaderContainer: {
        flexDirection: 'row',
        width: 414,
        height: 'auto',
        alignItems: 'center',
        //backgroundColor: 'red',
        justifyContent: 'space-between'

    },
    actionBar: {
        flexDirection: 'row',
        width: 414,
        height: 60,
        justifyContent: 'space-between'

    },
    likeCommentShare: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    saveIcon: {
        justifyContent: 'center'
    },
    descriptionContainer: {
        width: 414,
        height: "auto",
        marginStart: 10,
        justifyContent: 'flex-start'
    }
})