import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';

export default function ImageScreen({ route }) {
  const { source, description } = route.params;
  
  return (
    <View style={styles.cosntainer}>
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
  cosntainer: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
  },
  image: {
    width: 414,
    height: 300,
    borderRadius: 0,

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

